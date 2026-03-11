import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide6',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="6" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">BACKEND</h2>
      <h1 class="title">Server Configuration</h1>
      <p class="subtitle">Examples for common web servers and platforms</p>

      <div class="tabs">
        @for (tab of tabs; track tab.name; let i = $index) {
          <button class="tab-btn" [class.active]="activeTab === i" (click)="activeTab = i">{{ tab.name }}</button>
        }
      </div>

      <pre class="code-block"><code>{{ tabs[activeTab].code }}</code></pre>

      <div class="checklist">
        <h3 class="checklist-title">✅ Server Checklist</h3>
        <div class="check-item"><span class="check">✓</span> Served over HTTPS with valid certificate</div>
        <div class="check-item"><span class="check">✓</span> Content-Type: application/json</div>
        <div class="check-item"><span class="check">✓</span> Status code: 200 (no redirects!)</div>
        <div class="check-item"><span class="check">✓</span> Accessible without authentication</div>
        <div class="check-item"><span class="check">✓</span> Returns same content for Apple bot user-agent</div>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2.2rem; color: #fff; margin: 0.3rem 0 0.3rem; font-weight: 700; }
    .subtitle { font-size: 1.05rem; color: #888; margin: 0 0 1rem; }
    .tabs { display: flex; gap: 0.3rem; margin-bottom: 0; }
    .tab-btn { padding: 0.5rem 1rem; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-bottom: none; border-radius: 8px 8px 0 0; color: #888; cursor: pointer; font-size: 0.85rem; transition: all 0.2s; }
    .tab-btn.active { background: #1e1e2e; color: #f8d849; border-color: #3a3a5c; }
    .code-block { background: #1e1e2e; border: 1px solid #3a3a5c; border-radius: 0 12px 12px 12px; padding: 1rem 1.4rem; font-size: 0.8rem; color: #e0e0e0; font-family: 'Fira Code', 'JetBrains Mono', monospace; white-space: pre; overflow-x: auto; margin: 0; max-width: 700px; width: 100%; box-sizing: border-box; }
    .checklist { background: rgba(76,175,80,0.06); border: 1px solid rgba(76,175,80,0.2); border-radius: 12px; padding: 1rem 1.4rem; max-width: 500px; }
    .checklist-title { color: #fff; font-size: 1rem; margin: 0 0 0.6rem; }
    .check-item { color: #ccc; font-size: 0.85rem; padding: 0.25rem 0; display: flex; align-items: center; gap: 0.5rem; }
    .check { color: #4caf50; font-weight: bold; }
  `],
})
export class UlSlide6Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  activeTab = 0;

  tabs = [
    {
      name: 'Nginx',
      code: `location /.well-known/apple-app-site-association {
    default_type application/json;
    alias /var/www/aasa/apple-app-site-association;
}`
    },
    {
      name: 'Express.js',
      code: `app.get(
  '/.well-known/apple-app-site-association',
  (req, res) => {
    res.set('Content-Type', 'application/json');
    res.sendFile(
      path.join(__dirname, 'aasa.json')
    );
  }
);`
    },
    {
      name: 'Apache',
      code: `# .htaccess
<Files "apple-app-site-association">
    Header set Content-Type "application/json"
</Files>

RewriteRule ^.well-known/apple-app-site-association$ \\
    /apple-app-site-association [L]`
    },
    {
      name: 'CDN / S3',
      code: `# Upload to S3 bucket:
#   Key:  .well-known/apple-app-site-association
#   Content-Type: application/json
#   Cache-Control: max-age=86400

# CloudFront: ensure no redirects,
# pass-through without modification
# Disable "Restrict Viewer Access"`
    },
  ];
}
