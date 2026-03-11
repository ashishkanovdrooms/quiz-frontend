import { Component, EventEmitter, Output } from '@angular/core';
import { PresentationSlideComponent } from '../presentation-slide/presentation-slide.component';

@Component({
  selector: 'app-ul-slide3',
  standalone: true,
  imports: [PresentationSlideComponent],
  template: `
    <app-presentation-slide [slideNumber]="3" [totalSlides]="12" (next)="next.emit()" (prev)="prev.emit()">
      <h2 class="section-label">FLOW</h2>
      <h1 class="title">How Universal Links Work — Step by Step</h1>

      <div class="flow-diagram">
        <svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg" class="flow-svg">
          <!-- Step 1 -->
          <rect x="20" y="30" width="180" height="60" rx="10" fill="#1a1a3e" stroke="#667eea" stroke-width="2"/>
          <text x="110" y="55" text-anchor="middle" fill="#667eea" font-size="11" font-weight="600">① App Installed</text>
          <text x="110" y="72" text-anchor="middle" fill="#888" font-size="9">or updated on device</text>

          <!-- Arrow 1→2 -->
          <path d="M200,60 L240,60" stroke="#555" stroke-width="1.5" marker-end="url(#arrowGray)"/>

          <!-- Step 2 -->
          <rect x="240" y="30" width="180" height="60" rx="10" fill="#1a1a3e" stroke="#f8d849" stroke-width="2"/>
          <text x="330" y="55" text-anchor="middle" fill="#f8d849" font-size="11" font-weight="600">② iOS reads entitlements</text>
          <text x="330" y="72" text-anchor="middle" fill="#888" font-size="9">Associated Domains list</text>

          <!-- Arrow 2→3 -->
          <path d="M420,60 L460,60" stroke="#555" stroke-width="1.5" marker-end="url(#arrowGray)"/>

          <!-- Step 3 -->
          <rect x="460" y="30" width="190" height="60" rx="10" fill="#1a1a3e" stroke="#e040fb" stroke-width="2"/>
          <text x="555" y="55" text-anchor="middle" fill="#e040fb" font-size="11" font-weight="600">③ Apple CDN fetches AASA</text>
          <text x="555" y="72" text-anchor="middle" fill="#888" font-size="9">from your server via HTTPS</text>

          <!-- Arrow 3→4 -->
          <path d="M650,60 L690,60" stroke="#555" stroke-width="1.5" marker-end="url(#arrowGray)"/>

          <!-- Step 4 -->
          <rect x="690" y="30" width="150" height="60" rx="10" fill="#1a1a3e" stroke="#4caf50" stroke-width="2"/>
          <text x="765" y="55" text-anchor="middle" fill="#4caf50" font-size="11" font-weight="600">④ AASA cached</text>
          <text x="765" y="72" text-anchor="middle" fill="#888" font-size="9">on Apple CDN</text>

          <!-- Divider -->
          <line x1="20" y1="120" x2="840" y2="120" stroke="#333" stroke-width="1" stroke-dasharray="4,4"/>
          <text x="430" y="145" text-anchor="middle" fill="#555" font-size="11" font-style="italic">...later, user taps a link...</text>

          <!-- Step 5 -->
          <rect x="60" y="175" width="180" height="60" rx="10" fill="#1a1a3e" stroke="#ff9800" stroke-width="2"/>
          <text x="150" y="200" text-anchor="middle" fill="#ff9800" font-size="11" font-weight="600">⑤ User taps link</text>
          <text x="150" y="217" text-anchor="middle" fill="#888" font-size="9">https://yourapp.com/item/42</text>

          <!-- Arrow 5→6 -->
          <path d="M240,205 L300,205" stroke="#555" stroke-width="1.5" marker-end="url(#arrowGray)"/>

          <!-- Step 6 -->
          <rect x="300" y="175" width="200" height="60" rx="10" fill="#1a1a3e" stroke="#00bcd4" stroke-width="2"/>
          <text x="400" y="200" text-anchor="middle" fill="#00bcd4" font-size="11" font-weight="600">⑥ iOS checks cached AASA</text>
          <text x="400" y="217" text-anchor="middle" fill="#888" font-size="9">Does domain match? URL path?</text>

          <!-- Branch: YES -->
          <path d="M400,235 L400,280" stroke="#4caf50" stroke-width="1.5" marker-end="url(#arrowGreen)"/>
          <text x="415" y="265" fill="#4caf50" font-size="10" font-weight="600">YES</text>

          <!-- Branch: NO -->
          <path d="M500,205 L580,205 L580,280" stroke="#f44336" stroke-width="1.5" marker-end="url(#arrowRed)"/>
          <text x="595" y="265" fill="#f44336" font-size="10" font-weight="600">NO</text>

          <!-- App Opens -->
          <rect x="300" y="290" width="200" height="60" rx="10" fill="rgba(76,175,80,0.15)" stroke="#4caf50" stroke-width="2"/>
          <text x="400" y="315" text-anchor="middle" fill="#4caf50" font-size="12" font-weight="700">📱 App Opens</text>
          <text x="400" y="333" text-anchor="middle" fill="#8eff8e" font-size="9">with deep link context</text>

          <!-- Safari Opens -->
          <rect x="510" y="290" width="170" height="60" rx="10" fill="rgba(244,67,54,0.1)" stroke="#f44336" stroke-width="2"/>
          <text x="595" y="315" text-anchor="middle" fill="#f44336" font-size="12" font-weight="600">🌐 Safari Opens</text>
          <text x="595" y="333" text-anchor="middle" fill="#ff8a80" font-size="9">normal webpage</text>

          <defs>
            <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8" fill="none" stroke="#555" stroke-width="1.5"/>
            </marker>
            <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto">
              <path d="M0,0 L4,8 L8,0" fill="none" stroke="#4caf50" stroke-width="1.5"/>
            </marker>
            <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto">
              <path d="M0,0 L4,8 L8,0" fill="none" stroke="#f44336" stroke-width="1.5"/>
            </marker>
          </defs>
        </svg>
      </div>

      <div class="note">
        <span class="note-icon">⚡</span>
        <span>The AASA check happens <strong>locally</strong> on the device — no network request at tap time!</span>
      </div>
    </app-presentation-slide>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    .section-label { font-size: 0.85rem; color: #667eea; text-transform: uppercase; letter-spacing: 3px; margin: 0; font-weight: 600; }
    .title { font-size: 2rem; color: #fff; margin: 0.3rem 0 0.8rem; font-weight: 700; }
    .flow-diagram { width: 100%; max-width: 860px; }
    .flow-svg { width: 100%; height: auto; }
    .note { display: flex; align-items: center; gap: 0.6rem; background: rgba(255,193,7,0.08); border: 1px solid rgba(255,193,7,0.3); border-radius: 10px; padding: 0.8rem 1.2rem; color: #ccc; font-size: 0.95rem; max-width: 600px; }
    .note strong { color: #f8d849; }
    .note-icon { font-size: 1.3rem; }
  `],
})
export class UlSlide3Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
}
