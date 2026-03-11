import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { VotingService } from '../../services/voting.service';
import { Question1Component } from '../questions/question1.component';
import { Question10Component } from '../questions/question10.component';
import { Question2Component } from '../questions/question2.component';
import { Question3Component } from '../questions/question3.component';
import { Question4Component } from '../questions/question4.component';
import { Question5Component } from '../questions/question5.component';
import { Question6Component } from '../questions/question6.component';
import { Question7Component } from '../questions/question7.component';
import { Question8Component } from '../questions/question8.component';
import { Question9Component } from '../questions/question9.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
    Question7Component,
    Question8Component,
    Question9Component,
    Question10Component,
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent implements OnInit {
  currentSlide = 0;
  totalSlides = 10;
  showTitle = true;
  qrDataUrl: string | null = null;
  voteUrl: string | null = null;
  wsConnected = false;

  constructor(private votingService: VotingService) {}

  ngOnInit(): void {
    this.votingService.connect();
    this.votingService.qrData$.subscribe((data) => {
      if (data) {
        this.qrDataUrl = data.qr;
        this.voteUrl = data.url;
      }
    });
    this.votingService.connected$.subscribe((c) => (this.wsConnected = c));
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight' || event.key === ' ') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.prevSlide();
    }
  }

  startQuiz(): void {
    this.showTitle = false;
    this.currentSlide = 1;
  }

  nextSlide(): void {
    if (this.showTitle) {
      this.startQuiz();
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
