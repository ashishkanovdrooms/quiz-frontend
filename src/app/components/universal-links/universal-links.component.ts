import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { UlSlide1Component } from './slides/ul-slide1.component';
import { UlSlide10Component } from './slides/ul-slide10.component';
import { UlSlide11Component } from './slides/ul-slide11.component';
import { UlSlide12Component } from './slides/ul-slide12.component';
import { UlSlide2Component } from './slides/ul-slide2.component';
import { UlSlide3Component } from './slides/ul-slide3.component';
import { UlSlide4Component } from './slides/ul-slide4.component';
import { UlSlide5Component } from './slides/ul-slide5.component';
import { UlSlide6Component } from './slides/ul-slide6.component';
import { UlSlide7Component } from './slides/ul-slide7.component';
import { UlSlide8Component } from './slides/ul-slide8.component';
import { UlSlide9Component } from './slides/ul-slide9.component';

@Component({
  selector: 'app-universal-links',
  standalone: true,
  imports: [
    CommonModule,
    UlSlide1Component,
    UlSlide2Component,
    UlSlide3Component,
    UlSlide4Component,
    UlSlide5Component,
    UlSlide6Component,
    UlSlide7Component,
    UlSlide8Component,
    UlSlide9Component,
    UlSlide10Component,
    UlSlide11Component,
    UlSlide12Component,
  ],
  templateUrl: './universal-links.component.html',
  styleUrl: './universal-links.component.scss',
})
export class UniversalLinksComponent {
  currentSlide = 0;
  totalSlides = 12;
  showTitle = true;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight' || event.key === ' ') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.prevSlide();
    }
  }

  startPresentation(): void {
    this.showTitle = false;
    this.currentSlide = 1;
  }

  nextSlide(): void {
    if (this.showTitle) {
      this.startPresentation();
      return;
    }
    if (this.currentSlide < this.totalSlides) {
      this.currentSlide++;
    }
  }

  prevSlide(): void {
    if (this.currentSlide > 1) {
      this.currentSlide--;
    }
  }
}
