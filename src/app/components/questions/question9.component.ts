import { Component, EventEmitter, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz.model';
import { QuizSlideComponent } from '../quiz-slide/quiz-slide.component';

@Component({
  selector: 'app-question9',
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
export class Question9Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  question: QuizQuestion = {
    questionNumber: 9,
    totalQuestions: 10,
    code: `Math.max()`,
    questionText: 'What does Math.max() with no arguments return?',
    options: ['0', 'Infinity', '-Infinity', 'NaN'],
    correctIndex: 2,
    explanation:
      'Math.max() returns -Infinity when called with no arguments. It\'s the identity element for maximum — any number is greater than -Infinity. Similarly, Math.min() returns Infinity!',
    gifPath: 'gifs/question9.gif',
  };
}
