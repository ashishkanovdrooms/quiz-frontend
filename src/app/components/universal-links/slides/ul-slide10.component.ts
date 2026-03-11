import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide10',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="10" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">DEBUGGING</h2>
      <h1 class="title">Testing & Debugging</h1>
      <p class="subtitle">Tools and techniques to verify your setup</p>

      <div class="tools-grid">
        <div class="tool-card">
          <div class="tool-header">
            <span class="tool-icon">🍎</span>
            <span class="tool-name">Apple Validation API</span>
          </div>
          <pre class="tool-code"><code>curl -v https://app-site-association.cdn-apple.com/a/v1/yourdomain.com</code></pre>
          <p class="tool-desc">Check what Apple's CDN has cached for your domain</p>
        </div>

        <div class="tool-card">
          <div class="tool-header">
            <span class="tool-icon">🔧</span>
            <span class="tool-name">swcutil (macOS)</span>
          </div>
          <pre class="tool-code"><code>swcutil dl -d yourdomain.com</code></pre>
          <p class="tool-desc">Downloads the AASA from Apple's perspective</p>
        </div>

        <div class="tool-card">
          <div class="tool-header">
            <span class="tool-icon">📱</span>
            <span class="tool-name">iOS Console Logs</span>
          </div>
          <pre class="tool-code"><code># In Console.app, filter:
process:swcd
# Shows Universal Link resolution</code></pre>
          <p class="tool-desc">Watch iOS resolve Universal Links in real-time</p>
        </div>

        <div class="tool-card">
          <div class="tool-header">
            <span class="tool-icon">🌐</span>
            <span class="tool-name">Branch.io / AASA Validator</span>
          </div>
          <pre class="tool-code"><code>https://branch.io/resources/
  aasa-validator/</code></pre>
          <p class="tool-desc">Web-based tool to validate your AASA file</p>
        </div>
      </div>

      <div class="warn-box">
        <span class="warn-icon">⚠️</span>
        <div>
          <strong>Testing tip:</strong> Use Notes app or Messages to tap links.
          Typing URLs directly in Safari address bar does <strong>NOT</strong> trigger Universal Links!
        </div>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2.2rem; color: #fff; margin: 0.3rem 0 0.3rem; font-weight: 700; }
    .subtitle { font-size: 1.05rem; color: #888; margin: 0 0 1rem; }
    .tools-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; max-width: 800px; width: 100%; }
    .tool-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1rem; }
    .tool-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; }
    .tool-icon { font-size: 1.3rem; }
    .tool-name { color: #eee; font-weight: 600; font-size: 0.9rem; }
    .tool-code { background: #1e1e2e; border: 1px solid #3a3a5c; border-radius: 8px; padding: 0.5rem 0.8rem; font-size: 0.7rem; color: #f8d849; font-family: 'Fira Code', 'JetBrains Mono', monospace; white-space: pre-wrap; word-break: break-all; margin: 0 0 0.4rem; overflow-x: auto; }
    .tool-desc { color: #888; font-size: 0.78rem; margin: 0; }
    .warn-box { display: flex; align-items: flex-start; gap: 0.6rem; max-width: 600px; background: rgba(255,152,0,0.08); border: 1px solid rgba(255,152,0,0.3); border-radius: 10px; padding: 0.8rem 1.2rem; color: #ccc; font-size: 0.9rem; }
    .warn-box strong { color: #ffb74d; }
    .warn-icon { font-size: 1.3rem; flex-shrink: 0; }
  `],
})
export class UlSlide10Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
}
