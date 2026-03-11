import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide11',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="11" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">GOTCHAS</h2>
      <h1 class="title">Common Pitfalls</h1>
      <p class="subtitle">Things that will break Universal Links silently</p>

      <div class="pitfalls-list">
        @for (pitfall of pitfalls; track pitfall.title) {
          <div class="pitfall-card">
            <div class="pitfall-header">
              <span class="pitfall-icon">{{ pitfall.icon }}</span>
              <strong>{{ pitfall.title }}</strong>
            </div>
            <p class="pitfall-desc">{{ pitfall.desc }}</p>
            @if (pitfall.fix) {
              <div class="pitfall-fix">
                <span class="fix-label">Fix:</span> {{ pitfall.fix }}
              </div>
            }
          </div>
        }
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2.2rem; color: #fff; margin: 0.3rem 0 0.3rem; font-weight: 700; }
    .subtitle { font-size: 1.05rem; color: #888; margin: 0 0 1rem; }
    .pitfalls-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; max-width: 850px; width: 100%; }
    .pitfall-card { background: rgba(244,67,54,0.05); border: 1px solid rgba(244,67,54,0.15); border-radius: 12px; padding: 0.9rem 1.1rem; }
    .pitfall-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem; }
    .pitfall-header strong { color: #eee; font-size: 0.9rem; }
    .pitfall-icon { font-size: 1.1rem; }
    .pitfall-desc { color: #aaa; font-size: 0.8rem; margin: 0 0 0.4rem; line-height: 1.4; }
    .pitfall-fix { color: #8eff8e; font-size: 0.78rem; background: rgba(76,175,80,0.1); padding: 0.3rem 0.6rem; border-radius: 6px; }
    .fix-label { font-weight: 600; }
  `],
})
export class UlSlide11Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  pitfalls = [
    {
      icon: '🔄',
      title: 'Redirects on AASA endpoint',
      desc: 'Apple CDN will NOT follow 301/302 redirects. The AASA must be served directly at the well-known path.',
      fix: 'Serve the file directly without any redirects.'
    },
    {
      icon: '🕐',
      title: 'CDN caching delays',
      desc: 'Apple caches the AASA file. Changes can take 24-48 hours to propagate. During development, this is painful.',
      fix: 'Use ?mode=developer in Associated Domains to bypass CDN.'
    },
    {
      icon: '↗️',
      title: 'User long-press opens Safari',
      desc: 'If a user chooses "Open in Safari" via long-press, iOS remembers this choice for that domain.',
      fix: 'User must long-press the link again and choose "Open in App".'
    },
    {
      icon: '🔒',
      title: 'Invalid SSL certificate',
      desc: 'Self-signed certs, expired certs, or pinning issues will cause Apple CDN to fail silently.',
      fix: 'Use a valid, trusted CA certificate.'
    },
    {
      icon: '📋',
      title: 'Wrong Content-Type header',
      desc: 'The AASA response must have Content-Type: application/json. Some servers default to octet-stream.',
      fix: 'Explicitly set the Content-Type header on your server.'
    },
    {
      icon: '🔗',
      title: 'Same-domain links don\'t work',
      desc: 'Tapping a Universal Link while already on the same domain in Safari won\'t trigger the app. This is by design.',
      fix: 'Use a different (sub)domain for links meant to open the app.'
    },
  ];
}
