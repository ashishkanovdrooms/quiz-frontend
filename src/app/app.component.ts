import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifToggleService } from './services/gif-toggle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  template: `
    <router-outlet />
    <button class="gif-toggle-btn" (click)="gifToggle.toggle()">
      🎬 Human Touch: {{ (gifToggle.showGifs$ | async) ? 'ON' : 'OFF' }}
    </button>
  `,
  styles: [`
    :host { display: block; width: 100vw; height: 100vh; }
    .gif-toggle-btn {
      position: fixed;
      top: 1rem;
      left: 1rem;
      padding: 0.5rem 1rem;
      background: rgba(0, 0, 0, 0.65);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      z-index: 9999;
      transition: background 0.2s;
      font-family: 'Inter', sans-serif;
    }
    .gif-toggle-btn:hover {
      background: rgba(30, 30, 60, 0.9);
    }
  `]
})
export class AppComponent {
  constructor(public gifToggle: GifToggleService) {}
}
