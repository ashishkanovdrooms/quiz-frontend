import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide7',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="7" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">IOS APP</h2>
      <h1 class="title">iOS App Configuration</h1>
      <p class="subtitle">What the iOS developer needs to set up in Xcode</p>

      <div class="two-cols">
        <div class="col">
          <h3 class="col-title">1. Associated Domains Entitlement</h3>
          <div class="xcode-panel">
            <div class="panel-header">
              <span class="panel-dot red"></span>
              <span class="panel-dot yellow"></span>
              <span class="panel-dot green"></span>
              <span class="panel-title">Signing & Capabilities</span>
            </div>
            <div class="panel-body">
              <div class="entitlement-row">
                <span class="ent-icon">🔗</span>
                <span class="ent-label">Associated Domains</span>
              </div>
              <div class="domain-entry">
                <code>applinks:yourapp.com</code>
              </div>
              <div class="domain-entry">
                <code>applinks:www.yourapp.com</code>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <h3 class="col-title">2. Handle in AppDelegate / SceneDelegate</h3>
          <pre class="code-block"><code>{{ swiftCode }}</code></pre>
        </div>
      </div>

      <div class="info-row">
        <div class="info-box">
          <span class="info-icon">🔑</span>
          <div>
            <strong>Team ID</strong> comes from your Apple Developer account.
            Format: <code>TEAMID.com.bundle.id</code>
          </div>
        </div>
        <div class="info-box">
          <span class="info-icon">⚙️</span>
          <div>
            <strong>Provisioning profile</strong> must include the
            Associated Domains capability.
          </div>
        </div>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2.2rem; color: #fff; margin: 0.3rem 0 0.3rem; font-weight: 700; }
    .subtitle { font-size: 1.05rem; color: #888; margin: 0 0 1rem; }
    .two-cols { display: flex; gap: 2rem; max-width: 900px; width: 100%; align-items: flex-start; }
    .col { flex: 1; }
    .col-title { color: #eee; font-size: 1rem; margin: 0 0 0.8rem; font-weight: 600; }
    .xcode-panel { background: #1e1e2e; border-radius: 12px; overflow: hidden; border: 1px solid #3a3a5c; }
    .panel-header { display: flex; align-items: center; gap: 0.4rem; padding: 0.6rem 0.8rem; background: rgba(255,255,255,0.04); border-bottom: 1px solid #3a3a5c; }
    .panel-dot { width: 10px; height: 10px; border-radius: 50%; }
    .panel-dot.red { background: #ff5f56; }
    .panel-dot.yellow { background: #ffbd2e; }
    .panel-dot.green { background: #27c93f; }
    .panel-title { color: #888; font-size: 0.75rem; margin-left: 0.4rem; }
    .panel-body { padding: 0.8rem; }
    .entitlement-row { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.5rem; }
    .ent-icon { font-size: 1rem; }
    .ent-label { color: #ddd; font-size: 0.85rem; font-weight: 500; }
    .domain-entry { padding: 0.3rem 0.6rem; margin-bottom: 0.3rem; background: rgba(102,126,234,0.1); border-radius: 6px; }
    .domain-entry code { color: #667eea; font-size: 0.8rem; }
    .code-block { background: #1e1e2e; border: 1px solid #3a3a5c; border-radius: 12px; padding: 0.8rem 1rem; font-size: 0.72rem; color: #e0e0e0; font-family: 'Fira Code', 'JetBrains Mono', monospace; white-space: pre; overflow-x: auto; margin: 0; }
    .info-row { display: flex; gap: 1rem; max-width: 700px; }
    .info-box { flex: 1; display: flex; align-items: flex-start; gap: 0.5rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 0.7rem 1rem; }
    .info-box strong { color: #eee; font-size: 0.85rem; }
    .info-box div { color: #aaa; font-size: 0.8rem; line-height: 1.4; }
    .info-box code { color: #f8d849; background: rgba(248,216,73,0.1); padding: 0.1rem 0.3rem; border-radius: 3px; font-size: 0.75rem; }
    .info-icon { font-size: 1.2rem; flex-shrink: 0; }
  `],
})
export class UlSlide7Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  swiftCode = `// SceneDelegate.swift
func scene(_ scene: UIScene,
  continue userActivity: NSUserActivity)
{
  guard
    userActivity.activityType ==
      NSUserActivityTypeBrowsingWeb,
    let url = userActivity.webpageURL
  else { return }

  // Route to correct screen
  let path = url.path
  // e.g. "/products/42"
  router.handle(path: path)
}`;
}
