import { Component, EventEmitter, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz.model';
import { QuizSlideComponent } from '../quiz-slide/quiz-slide.component';

@Component({
  selector: 'app-question3',
  standalone: true,
  imports: [QuizSlideComponent],
  template: `
    <app-quiz-slide
      [question]="question"
      (next)="next.emit()"
      (prev)="prev.emit()"
    />
  `,
})
export class Question3Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  question: QuizQuestion = {
    questionNumber: 3,
    totalQuestions: 10,
    code: `0.1 + 0.2 === 0.3`,
    questionText: 'What does this comparison return?',
    options: ['true', 'false', 'NaN', 'TypeError'],
    correctIndex: 1,
    explanation:
      'Due to IEEE 754 floating-point precision, 0.1 + 0.2 equals 0.30000000000000004, not 0.3. The strict comparison returns false!',
  };
}
