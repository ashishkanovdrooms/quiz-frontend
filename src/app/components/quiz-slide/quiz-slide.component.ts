import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizQuestion } from '../../models/quiz.model';
import { VotingService } from '../../services/voting.service';

@Component({
  selector: 'app-quiz-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-slide.component.html',
  styleUrl: './quiz-slide.component.scss',
})
export class QuizSlideComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) question!: QuizQuestion;
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  selectedIndex: number | null = null;
  revealed = false;
  votes: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
  totalVoters = 0;
  connected = false;

  private sub?: Subscription;
  private connSub?: Subscription;

  constructor(private votingService: VotingService) {}

  ngOnInit(): void {
    this.sub = this.votingService.voteState$.subscribe((state) => {
      if (state.question === this.question.questionNumber) {
        this.votes = state.votes;
        this.totalVoters = state.totalVoters;
      }
    });
    this.connSub = this.votingService.connected$.subscribe((c) => (this.connected = c));
  }

  ngOnChanges(): void {
    // Notify server of current question
    this.votingService.setQuestion(this.question.questionNumber);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.connSub?.unsubscribe();
  }

  selectOption(index: number): void {
    if (this.revealed) return;
    this.selectedIndex = index;
    this.revealed = true;
    this.votingService.revealAnswer();
  }

  getOptionClass(index: number): string {
    if (!this.revealed) return '';
    if (index === this.question.correctIndex) return 'correct';
    if (index === this.selectedIndex) return 'incorrect';
    return 'dimmed';
  }

  getVotePercent(index: number): number {
    if (this.totalVoters === 0) return 0;
    return Math.round(((this.votes[index] || 0) / this.totalVoters) * 100);
  }

  reset(): void {
    this.selectedIndex = null;
    this.revealed = false;
    this.votes = { 0: 0, 1: 0, 2: 0, 3: 0 };
    this.totalVoters = 0;
  }

  onNext(): void {
    this.reset();
    this.next.emit();
  }

  onPrev(): void {
    this.reset();
    this.prev.emit();
  }
}
