import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide1',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="1" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">OVERVIEW</h2>
      <h1 class="title">What are Universal Links?</h1>
      <p class="description">
        Universal Links allow your app to handle <strong>standard HTTPS URLs</strong> —
        when a user taps a link, iOS opens your app directly instead of Safari.
      </p>

      <div class="comparison-cards">
        <div class="card bad">
          <div class="card-icon">🌐</div>
          <div class="card-label">Without Universal Links</div>
          <div class="card-flow">
            <span class="flow-item">User taps link</span>
            <span class="flow-arrow">→</span>
            <span class="flow-item">Safari opens</span>
            <span class="flow-arrow">→</span>
            <span class="flow-item">Banner "Open in App?"</span>
          </div>
        </div>
        <div class="card good">
          <div class="card-icon">📱</div>
          <div class="card-label">With Universal Links</div>
          <div class="card-flow">
            <span class="flow-item">User taps link</span>
            <span class="flow-arrow">→</span>
            <span class="flow-item highlight">App opens directly!</span>
          </div>
        </div>
      </div>

      <div class="key-points">
        <div class="point"><span class="bullet">✓</span> Standard HTTPS URLs (no custom schemes)</div>
        <div class="point"><span class="bullet">✓</span> Secure — Apple verifies ownership</div>
        <div class="point"><span class="bullet">✓</span> Graceful fallback to Safari if app not installed</div>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2.5rem; color: #fff; margin: 0.3rem 0 0.8rem; font-weight: 700; }
    .description { font-size: 1.15rem; color: #aaa; max-width: 700px; text-align: center; line-height: 1.6; margin: 0 0 1.5rem; }
    .description strong { color: #f8d849; }
    .comparison-cards { display: flex; gap: 1.5rem; margin-bottom: 1.5rem; }
    .card { padding: 1.2rem 1.8rem; border-radius: 12px; min-width: 280px; }
    .card.bad { background: rgba(244, 67, 54, 0.1); border: 1px solid rgba(244, 67, 54, 0.3); }
    .card.good { background: rgba(76, 175, 80, 0.1); border: 1px solid rgba(76, 175, 80, 0.3); }
    .card-icon { font-size: 1.8rem; margin-bottom: 0.3rem; }
    .card-label { font-size: 0.9rem; color: #999; margin-bottom: 0.6rem; font-weight: 500; }
    .card-flow { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
    .flow-item { background: rgba(255,255,255,0.08); padding: 0.3rem 0.7rem; border-radius: 6px; font-size: 0.85rem; color: #ddd; }
    .flow-arrow { color: #666; font-size: 0.9rem; }
    .flow-item.highlight { background: rgba(76,175,80,0.3); color: #8eff8e; font-weight: 600; }
    .key-points { display: flex; flex-direction: column; gap: 0.5rem; }
    .point { color: #ccc; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem; }
    .bullet { color: #4caf50; font-weight: bold; }
  `],
})
export class UlSlide1Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
}
