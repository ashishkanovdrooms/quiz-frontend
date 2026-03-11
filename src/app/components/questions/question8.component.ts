import { Component, EventEmitter, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz.model';
import { QuizSlideComponent } from '../quiz-slide/quiz-slide.component';

@Component({
  selector: 'app-question8',
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
export class Question8Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  question: QuizQuestion = {
    questionNumber: 8,
    totalQuestions: 10,
    code: `true + true + true`,
    questionText: 'What is the result?',
    options: ['3', '"truetruetrue"', 'NaN', 'TypeError'],
    correctIndex: 0,
    explanation:
      'When used with the + operator, booleans are coerced to numbers. true becomes 1, so true + true + true = 1 + 1 + 1 = 3.',
    gifPath: 'gifs/question8.gif',
  };
}
