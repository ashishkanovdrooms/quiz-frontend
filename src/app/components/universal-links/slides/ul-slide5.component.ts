import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide5',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="5" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">DEEP DIVE</h2>
      <h1 class="title">AASA Path Matching</h1>
      <p class="subtitle">Pattern syntax for the <code>"/"</code> (path) component</p>

      <div class="patterns-table">
        <div class="table-header">
          <span class="col-pattern">Pattern</span>
          <span class="col-match">Matches</span>
          <span class="col-example">Example</span>
        </div>
        @for (row of patterns; track row.pattern) {
          <div class="table-row">
            <code class="col-pattern">{{ row.pattern }}</code>
            <span class="col-match">{{ row.matches }}</span>
            <code class="col-example">{{ row.example }}</code>
          </div>
        }
      </div>

      <div class="info-box">
        <span class="info-icon">💡</span>
        <div>
          <strong>Exclude patterns</strong> are evaluated first. Use <code>"exclude": true</code> to prevent
          certain paths from opening the app (e.g., static assets, API docs).
        </div>
      </div>

      <div class="info-box query">
        <span class="info-icon">🔍</span>
        <div>
          You can also match on <code>"?"</code> (query string) and <code>"#"</code> (fragment)
          for more precise control.
        </div>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2.2rem; color: #fff; margin: 0.3rem 0 0.3rem; font-weight: 700; }
    .subtitle { font-size: 1.05rem; color: #888; margin: 0 0 1.2rem; }
    .subtitle code { color: #f8d849; background: rgba(248,216,73,0.1); padding: 0.1rem 0.4rem; border-radius: 4px; }
    .patterns-table { max-width: 720px; width: 100%; background: rgba(255,255,255,0.03); border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); }
    .table-header { display: flex; padding: 0.7rem 1.2rem; background: rgba(255,255,255,0.06); font-weight: 600; color: #aaa; font-size: 0.85rem; }
    .table-row { display: flex; padding: 0.6rem 1.2rem; border-top: 1px solid rgba(255,255,255,0.05); }
    .col-pattern { flex: 0 0 180px; color: #f8d849; font-size: 0.9rem; }
    .col-match { flex: 1; color: #ccc; font-size: 0.85rem; }
    .col-example { flex: 0 0 200px; color: #888; font-size: 0.85rem; }
    .info-box { display: flex; align-items: flex-start; gap: 0.6rem; max-width: 600px; background: rgba(102,126,234,0.08); border: 1px solid rgba(102,126,234,0.25); border-radius: 10px; padding: 0.8rem 1.2rem; color: #ccc; font-size: 0.9rem; margin-top: 0.5rem; }
    .info-box.query { background: rgba(0,188,212,0.08); border-color: rgba(0,188,212,0.25); }
    .info-box strong { color: #eee; }
    .info-box code { color: #f8d849; background: rgba(248,216,73,0.1); padding: 0.1rem 0.3rem; border-radius: 3px; font-size: 0.8rem; }
    .info-icon { font-size: 1.2rem; flex-shrink: 0; }
  `],
})
export class UlSlide5Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  patterns = [
    { pattern: '/products/*', matches: 'Any single path segment', example: '/products/42' },
    { pattern: '/user/*/profile', matches: 'Wildcard in middle', example: '/user/john/profile' },
    { pattern: '/docs/**', matches: 'Any nested path', example: '/docs/a/b/c' },
    { pattern: '/item/?*', matches: 'One or more characters', example: '/item/abc (not /item/)' },
    { pattern: '/sale', matches: 'Exact path only', example: '/sale' },
  ];
}
