import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-presentation-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presentation-slide.component.html',
  styleUrl: './presentation-slide.component.scss',
})
export class PresentationSlideComponent {
  @Input({ required: true }) slideNumber!: number;
  @Input({ required: true }) totalSlides!: number;
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  onNext(): void {
    this.next.emit();
  }

  onPrev(): void {
    this.prev.emit();
  }
}
