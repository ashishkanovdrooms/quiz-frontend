import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide9',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="9" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">COMPARISON</h2>
      <h1 class="title">Universal Links vs Deep Links vs URL Schemes</h1>

      <div class="compare-table">
        <div class="table-header">
          <span class="col-feature">Feature</span>
          <span class="col-val">Universal Links</span>
          <span class="col-val">Custom URL Scheme</span>
          <span class="col-val">App Links (Android)</span>
        </div>
        @for (row of rows; track row.feature) {
          <div class="table-row">
            <span class="col-feature">{{ row.feature }}</span>
            <span class="col-val" [innerHTML]="row.universal"></span>
            <span class="col-val" [innerHTML]="row.scheme"></span>
            <span class="col-val" [innerHTML]="row.android"></span>
          </div>
        }
      </div>

      <div class="verdict">
        <span class="verdict-icon">🏆</span>
        <div>
          <strong>Universal Links are the recommended approach for iOS.</strong>
          They're more secure, give a better UX, and fall back gracefully.
        </div>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 1.8rem; color: #fff; margin: 0.3rem 0 1rem; font-weight: 700; }
    .compare-table { max-width: 850px; width: 100%; background: rgba(255,255,255,0.03); border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 1rem; }
    .table-header { display: flex; padding: 0.7rem 1rem; background: rgba(255,255,255,0.06); font-weight: 600; color: #aaa; font-size: 0.8rem; }
    .table-row { display: flex; padding: 0.55rem 1rem; border-top: 1px solid rgba(255,255,255,0.05); }
    .table-row:nth-child(even) { background: rgba(255,255,255,0.02); }
    .col-feature { flex: 0 0 160px; color: #ddd; font-size: 0.85rem; font-weight: 500; }
    .col-val { flex: 1; color: #bbb; font-size: 0.8rem; text-align: center; }
    .verdict { display: flex; align-items: center; gap: 0.8rem; max-width: 600px; background: rgba(76,175,80,0.08); border: 1px solid rgba(76,175,80,0.25); border-radius: 12px; padding: 1rem 1.4rem; }
    .verdict strong { color: #8eff8e; font-size: 0.95rem; }
    .verdict div { color: #ccc; font-size: 0.9rem; line-height: 1.4; }
    .verdict-icon { font-size: 1.6rem; }
  `],
})
export class UlSlide9Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  rows = [
    { feature: 'URL format', universal: 'https://yourapp.com/path', scheme: 'myapp://path', android: 'https://yourapp.com/path' },
    { feature: 'Requires install?', universal: '❌ Falls back to web', scheme: '⚠️ Error if not installed', android: '❌ Falls back to web' },
    { feature: 'Secure', universal: '✅ Apple verifies', scheme: '❌ Any app can claim', android: '✅ Google verifies' },
    { feature: 'Works in Safari', universal: '✅ Yes', scheme: '⚠️ Shows error dialog', android: 'N/A (Chrome)' },
    { feature: 'User can disable', universal: '✅ Long-press override', scheme: '❌ No', android: '✅ App settings' },
    { feature: 'Setup complexity', universal: '🟡 Medium', scheme: '🟢 Easy', android: '🟡 Medium' },
    { feature: 'Recommended by', universal: '🍎 Apple ✅', scheme: '🍎 Legacy', android: '🤖 Google ✅' },
  ];
}
