import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide4',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="4" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">BACKEND</h2>
      <h1 class="title">The AASA File</h1>
      <p class="subtitle">Apple App Site Association — the heart of Universal Links</p>

      <div class="two-cols">
        <div class="col-left">
          <div class="file-badge">
            <span class="file-icon">📄</span>
            <code>/.well-known/apple-app-site-association</code>
          </div>
          <pre class="code-block"><code>{{aasaJson}}</code></pre>
        </div>

        <div class="col-right">
          <h3 class="col-title">Key Rules</h3>
          <div class="rule">
            <span class="rule-num">1</span>
            <div>
              <strong>No file extension</strong>
              <p>Served as-is, no <code>.json</code> suffix</p>
            </div>
          </div>
          <div class="rule">
            <span class="rule-num">2</span>
            <div>
              <strong>Content-Type: application/json</strong>
              <p>Must return proper JSON content type</p>
            </div>
          </div>
          <div class="rule">
            <span class="rule-num">3</span>
            <div>
              <strong>HTTPS only</strong>
              <p>Must be served over valid TLS/SSL</p>
            </div>
          </div>
          <div class="rule">
            <span class="rule-num">4</span>
            <div>
              <strong>No redirects allowed</strong>
              <p>Apple CDN won't follow 301/302</p>
            </div>
          </div>
          <div class="rule">
            <span class="rule-num">5</span>
            <div>
              <strong>Max 128 KB</strong>
              <p>File must be under 128 KB</p>
            </div>
          </div>
        </div>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2.2rem; color: #fff; margin: 0.3rem 0 0.3rem; font-weight: 700; }
    .subtitle { font-size: 1.05rem; color: #888; margin: 0 0 1.2rem; }
    .two-cols { display: flex; gap: 2rem; max-width: 900px; width: 100%; align-items: flex-start; }
    .col-left { flex: 1; }
    .col-right { flex: 1; }
    .file-badge { display: flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.05); padding: 0.5rem 0.8rem; border-radius: 8px; margin-bottom: 0.8rem; }
    .file-badge code { color: #f8d849; font-size: 0.8rem; }
    .file-icon { font-size: 1.2rem; }
    .code-block { background: #1e1e2e; border: 1px solid #3a3a5c; border-radius: 12px; padding: 1rem 1.2rem; font-size: 0.8rem; color: #e0e0e0; font-family: 'Fira Code', 'JetBrains Mono', monospace; white-space: pre; overflow-x: auto; margin: 0; }
    .col-title { color: #fff; font-size: 1.1rem; margin: 0 0 0.8rem; }
    .rule { display: flex; gap: 0.7rem; margin-bottom: 0.7rem; align-items: flex-start; }
    .rule-num { display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: rgba(102,126,234,0.2); color: #667eea; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
    .rule strong { color: #eee; font-size: 0.9rem; }
    .rule p { color: #888; font-size: 0.8rem; margin: 0.15rem 0 0; }
    .rule code { color: #f8d849; background: rgba(248,216,73,0.1); padding: 0.1rem 0.3rem; border-radius: 3px; font-size: 0.75rem; }
  `],
})
export class UlSlide4Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  aasaJson = `{
  "applinks": {
    "details": [
      {
        "appIDs": [
          "TEAMID.com.example.app"
        ],
        "components": [
          {
            "/": "/products/*",
            "comment": "Product pages"
          },
          {
            "/": "/user/*",
            "comment": "User profiles"
          },
          {
            "/": "/static/*",
            "exclude": true,
            "comment": "Exclude static"
          }
        ]
      }
    ]
  }
}`;
}
