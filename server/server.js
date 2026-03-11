const http = require('http');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');
const QRCode = require('qrcode');
const os = require('os');

const PORT = process.env.PORT || 3000;
const TOTAL_QUESTIONS = 10;

// Angular build output directory
const DIST_DIR = path.join(__dirname, '..', 'dist', 'quiz', 'browser');

// MIME types for static file serving
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

// --- State ---
let currentQuestion = 0; // 0 = title screen, 1-10 = questions
let votes = {}; // { optionIndex: count }
let voters = new Set(); // track who already voted (by connection id)
let revealed = false;
let connId = 0;

function resetVotes() {
  votes = { 0: 0, 1: 0, 2: 0, 3: 0 };
  voters.clear();
  revealed = false;
}
resetVotes();

// --- Get local IP ---
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const localIP = getLocalIP();

// --- HTTP Server ---
const server = http.createServer((req, res) => {
  // API: mobile vote page
  if (req.url === '/vote') {
    const filePath = path.join(__dirname, 'vote.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading vote page');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  // API: QR code
  if (req.url === '/qr') {
    const baseUrl = process.env.RENDER_EXTERNAL_URL || `http://${localIP}:${PORT}`;
    const voteUrl = `${baseUrl}/vote`;
    QRCode.toDataURL(voteUrl, { width: 400, margin: 2, color: { dark: '#ffffff', light: '#00000000' } }, (err, url) => {
      if (err) {
        res.writeHead(500);
        res.end('Error generating QR');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ qr: url, url: voteUrl }));
    });
    return;
  }

  // Static files: serve Angular build
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);

  // If no extension, serve index.html (Angular routing)
  if (!ext) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fallback to index.html for Angular routes
      fs.readFile(path.join(DIST_DIR, 'index.html'), (err2, indexData) => {
        if (err2) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(indexData);
      });
      return;
    }
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(data);
  });
});

// --- WebSocket Server ---
const wss = new WebSocketServer({ server });

function broadcast(message) {
  const data = JSON.stringify(message);
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(data);
    }
  });
}

function broadcastState() {
  broadcast({
    type: 'state',
    question: currentQuestion,
    votes: votes,
    revealed: revealed,
    totalVoters: voters.size,
  });
}

wss.on('connection', (ws) => {
  const id = ++connId;
  ws._voterId = id;

  // Send current state to new connection
  ws.send(JSON.stringify({
    type: 'state',
    question: currentQuestion,
    votes: votes,
    revealed: revealed,
    totalVoters: voters.size,
  }));

  ws.on('message', (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }

    switch (msg.type) {
      // From presenter: change question
      case 'setQuestion':
        currentQuestion = msg.question;
        resetVotes();
        broadcastState();
        break;

      // From presenter: reveal answer
      case 'reveal':
        revealed = true;
        broadcastState();
        break;

      // From voter: cast a vote
      case 'vote':
        if (revealed) break; // too late
        if (voters.has(ws._voterId)) break; // already voted
        const optIdx = msg.option;
        if (optIdx >= 0 && optIdx <= 3) {
          voters.add(ws._voterId);
          votes[optIdx] = (votes[optIdx] || 0) + 1;
          // Confirm to voter
          ws.send(JSON.stringify({ type: 'voteConfirmed', option: optIdx }));
          // Broadcast updated votes to all
          broadcastState();
        }
        break;
    }
  });

  ws.on('close', () => {
    // Optionally clean up
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const distExists = fs.existsSync(path.join(DIST_DIR, 'index.html'));
  const baseUrl = process.env.RENDER_EXTERNAL_URL || `http://${localIP}:${PORT}`;
  console.log('');
  console.log('  🎮 Quiz Server running!');
  console.log('  ─────────────────────────────────');
  console.log(`  📺 Quiz App:   ${baseUrl}`);
  console.log(`  📱 Vote Page:  ${baseUrl}/vote`);
  console.log(`  🔗 QR Code:    ${baseUrl}/qr`);
  if (!distExists) {
    console.log('');
    console.log('  ⚠️  Angular build not found! Run: npm run build');
  }
  console.log('  ─────────────────────────────────');
  console.log('');
});
