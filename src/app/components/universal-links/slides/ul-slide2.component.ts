import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide2',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="2" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">ARCHITECTURE</h2>
      <h1 class="title">The Three Players</h1>
      <p class="subtitle">Universal Links require coordination between three systems</p>

      <div class="diagram">
        <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" class="arch-svg">
          <!-- Apple CDN -->
          <rect x="310" y="10" width="180" height="70" rx="12" fill="#1a1a3e" stroke="#667eea" stroke-width="2"/>
          <text x="400" y="40" text-anchor="middle" fill="#667eea" font-size="13" font-weight="600">🍎 Apple CDN</text>
          <text x="400" y="58" text-anchor="middle" fill="#888" font-size="11">Fetches &amp; caches AASA</text>

          <!-- Your Backend -->
          <rect x="30" y="200" width="200" height="90" rx="12" fill="#1a1a3e" stroke="#f8d849" stroke-width="2"/>
          <text x="130" y="232" text-anchor="middle" fill="#f8d849" font-size="14" font-weight="600">🖥 Your Backend</text>
          <text x="130" y="252" text-anchor="middle" fill="#888" font-size="11">Hosts AASA file at</text>
          <text x="130" y="268" text-anchor="middle" fill="#aaa" font-size="10" font-family="monospace">/.well-known/apple-app-</text>
          <text x="130" y="280" text-anchor="middle" fill="#aaa" font-size="10" font-family="monospace">site-association</text>

          <!-- iPhone -->
          <rect x="570" y="200" width="200" height="90" rx="12" fill="#1a1a3e" stroke="#4caf50" stroke-width="2"/>
          <text x="670" y="232" text-anchor="middle" fill="#4caf50" font-size="14" font-weight="600">📱 iPhone / iOS</text>
          <text x="670" y="252" text-anchor="middle" fill="#888" font-size="11">App with Associated</text>
          <text x="670" y="268" text-anchor="middle" fill="#888" font-size="11">Domains entitlement</text>

          <!-- Arrows -->
          <line x1="350" y1="80" x2="180" y2="200" stroke="#667eea" stroke-width="2" marker-end="url(#arrowBlue)"/>
          <line x1="450" y1="80" x2="620" y2="200" stroke="#667eea" stroke-width="2" marker-end="url(#arrowBlue)"/>
          <line x1="230" y1="245" x2="570" y2="245" stroke="#fff" stroke-width="1.5" stroke-dasharray="6,4" marker-end="url(#arrowWhite)"/>

          <text x="400" y="225" text-anchor="middle" fill="#aaa" font-size="10">User taps link → iOS decides: App or Safari?</text>

          <defs>
            <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8" fill="none" stroke="#667eea" stroke-width="1.5"/>
            </marker>
            <marker id="arrowWhite" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8" fill="none" stroke="#fff" stroke-width="1.5"/>
            </marker>
          </defs>
        </svg>
      </div>

      <div class="roles">
        <div class="role"><span class="dot yellow"></span><strong>Backend</strong> — Hosts the AASA JSON file</div>
        <div class="role"><span class="dot blue"></span><strong>Apple CDN</strong> — Downloads and caches the AASA</div>
        <div class="role"><span class="dot green"></span><strong>iOS App</strong> — Declares which domains it handles</div>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2.2rem; color: #fff; margin: 0.3rem 0 0.3rem; font-weight: 700; }
    .subtitle { font-size: 1.05rem; color: #888; margin: 0 0 1rem; }
    .diagram { width: 100%; max-width: 800px; }
    .arch-svg { width: 100%; height: auto; }
    .roles { display: flex; gap: 2rem; flex-wrap: wrap; }
    .role { color: #ccc; font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem; }
    .role strong { color: #eee; }
    .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
    .dot.yellow { background: #f8d849; }
    .dot.blue { background: #667eea; }
    .dot.green { background: #4caf50; }
  `],
})
export class UlSlide2Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
}
