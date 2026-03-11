import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide8',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="8" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">END-TO-END</h2>
      <h1 class="title">The Complete Flow</h1>

      <div class="timeline">
        @for (step of steps; track step.num) {
          <div class="timeline-step">
            <div class="step-marker" [style.background]="step.color">{{ step.num }}</div>
            <div class="step-content">
              <div class="step-title" [style.color]="step.color">{{ step.title }}</div>
              <div class="step-desc">{{ step.desc }}</div>
            </div>
            @if (step.num < steps.length) {
              <div class="step-connector"></div>
            }
          </div>
        }
      </div>

      <div class="timing-note">
        <svg viewBox="0 0 500 60" xmlns="http://www.w3.org/2000/svg" class="timing-svg">
          <rect x="0" y="20" width="200" height="24" rx="4" fill="rgba(102,126,234,0.2)" stroke="#667eea" stroke-width="1"/>
          <text x="100" y="36" text-anchor="middle" fill="#667eea" font-size="10" font-weight="600">App Install / Update (once)</text>

          <rect x="220" y="20" width="120" height="24" rx="4" fill="rgba(76,175,80,0.2)" stroke="#4caf50" stroke-width="1"/>
          <text x="280" y="36" text-anchor="middle" fill="#4caf50" font-size="10" font-weight="600">User taps link</text>

          <rect x="360" y="20" width="130" height="24" rx="4" fill="rgba(255,152,0,0.2)" stroke="#ff9800" stroke-width="1"/>
          <text x="425" y="36" text-anchor="middle" fill="#ff9800" font-size="10" font-weight="600">App opens instantly</text>

          <text x="110" y="56" text-anchor="middle" fill="#666" font-size="8">Background process</text>
          <text x="350" y="56" text-anchor="middle" fill="#666" font-size="8">< 100ms — no network needed</text>
        </svg>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2.2rem; color: #fff; margin: 0.3rem 0 1rem; font-weight: 700; }
    .timeline { display: flex; flex-direction: column; gap: 0; max-width: 650px; width: 100%; }
    .timeline-step { display: flex; align-items: flex-start; gap: 1rem; position: relative; padding-bottom: 0.3rem; }
    .step-marker { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; color: #fff; flex-shrink: 0; }
    .step-content { padding-bottom: 1rem; border-left: 2px solid rgba(255,255,255,0.08); padding-left: 1rem; margin-left: -1px; }
    .step-title { font-size: 1rem; font-weight: 600; margin-bottom: 0.15rem; }
    .step-desc { color: #999; font-size: 0.85rem; line-height: 1.4; }
    .timing-note { max-width: 500px; width: 100%; margin-top: 0.5rem; }
    .timing-svg { width: 100%; height: auto; }
  `],
})
export class UlSlide8Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  steps = [
    { num: 1, title: 'Developer publishes AASA file', desc: 'Backend team hosts it at /.well-known/apple-app-site-association', color: '#f8d849' },
    { num: 2, title: 'iOS dev adds Associated Domains', desc: 'Adds applinks:yourdomain.com to the app entitlements in Xcode', color: '#667eea' },
    { num: 3, title: 'App is installed on device', desc: 'User downloads from App Store or TestFlight', color: '#e040fb' },
    { num: 4, title: 'iOS contacts Apple CDN', desc: 'Apple CDN fetches the AASA file from your server (not the device!)', color: '#00bcd4' },
    { num: 5, title: 'AASA is cached locally', desc: 'iOS stores the domain-to-app mapping on the device', color: '#4caf50' },
    { num: 6, title: 'User taps a matching URL', desc: 'In Messages, Mail, Safari, or any app — iOS intercepts it', color: '#ff9800' },
    { num: 7, title: 'App opens with deep link', desc: 'iOS passes the URL to your app via NSUserActivity', color: '#f44336' },
  ];
}
