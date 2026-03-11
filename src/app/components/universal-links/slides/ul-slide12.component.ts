import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide12',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="12" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">FRONTEND</h2>
      <h1 class="title">What Frontend Devs Need to Know</h1>
      <p class="subtitle">Your role in making Universal Links work</p>

      <div class="cards-grid">
        <div class="card">
          <div class="card-num">1</div>
          <div class="card-body">
            <h3>Host the AASA File</h3>
            <p>If your frontend controls the domain (SPA on Vercel, Netlify, etc.), <strong>you</strong> need to serve the AASA JSON at the correct path.</p>
            <div class="example">
              Netlify: <code>public/.well-known/apple-app-site-association</code><br>
              Vercel: configure via <code>vercel.json</code> rewrites
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-num">2</div>
          <div class="card-body">
            <h3>Route Awareness</h3>
            <p>Your SPA routes should match the paths in the AASA file. When the app isn't installed, the web fallback must handle those URLs gracefully.</p>
            <div class="example">
              <code>/products/:id</code> → Show product page on web<br>
              <code>/user/:name</code> → Show user profile on web
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-num">3</div>
          <div class="card-body">
            <h3>Smart App Banners</h3>
            <p>Add a meta tag to guide users to install the app when they land on the web fallback.</p>
            <div class="code-mini">
              <code>&lt;meta name="apple-itunes-app" content="app-id=123456789, app-argument=https://yourapp.com/path"&gt;</code>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-num">4</div>
          <div class="card-body">
            <h3>Deferred Deep Linking</h3>
            <p>For users who <strong>don't have the app</strong> yet: capture the URL, redirect to App Store, and pass context so the app opens the right screen after install.</p>
            <div class="example">
              Tools: Branch.io, Firebase Dynamic Links, AppsFlyer
            </div>
          </div>
        </div>
      </div>

      <div class="summary-box">
        <span class="summary-icon">🎯</span>
        <div>
          <strong>TL;DR for Frontend:</strong> Host the AASA file, make your web routes match the native routes,
          add Smart App Banners, and coordinate with the iOS team on path patterns.
        </div>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2rem; color: #fff; margin: 0.3rem 0 0.3rem; font-weight: 700; }
    .subtitle { font-size: 1.05rem; color: #888; margin: 0 0 1rem; }
    .cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; max-width: 850px; width: 100%; }
    .card { display: flex; gap: 0.8rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1rem; }
    .card-num { width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 0.9rem; flex-shrink: 0; }
    .card-body h3 { color: #eee; font-size: 0.95rem; margin: 0 0 0.3rem; }
    .card-body p { color: #aaa; font-size: 0.8rem; line-height: 1.4; margin: 0 0 0.4rem; }
    .card-body p strong { color: #ddd; }
    .example { background: rgba(102,126,234,0.08); border-radius: 6px; padding: 0.4rem 0.6rem; font-size: 0.75rem; color: #aaa; }
    .example code { color: #f8d849; font-size: 0.75rem; }
    .code-mini { background: #1e1e2e; border: 1px solid #3a3a5c; border-radius: 6px; padding: 0.4rem 0.6rem; }
    .code-mini code { color: #f8d849; font-size: 0.7rem; font-family: 'Fira Code', 'JetBrains Mono', monospace; word-break: break-all; }
    .summary-box { display: flex; align-items: center; gap: 0.8rem; max-width: 700px; background: rgba(102,126,234,0.1); border: 1px solid rgba(102,126,234,0.3); border-radius: 12px; padding: 1rem 1.4rem; }
    .summary-box strong { color: #8eaaff; font-size: 0.95rem; }
    .summary-box div { color: #ccc; font-size: 0.9rem; line-height: 1.4; }
    .summary-icon { font-size: 1.6rem; flex-shrink: 0; }
  `],
})
export class UlSlide12Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
}
