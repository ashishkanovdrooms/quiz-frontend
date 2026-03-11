import { Component, EventEmitter, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz.model';
import { QuizSlideComponent } from '../quiz-slide/quiz-slide.component';

@Component({
  selector: 'app-question2',
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
export class Question2Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  question: QuizQuestion = {
    questionNumber: 2,
    totalQuestions: 10,
    code: `typeof null   // ???\ntypeof NaN    // ???`,
    questionText: 'What do typeof null and typeof NaN return?',
    options: [
      '"null" and "NaN"',
      '"object" and "number"',
      '"undefined" and "number"',
      '"object" and "NaN"',
    ],
    correctIndex: 1,
    explanation:
      'typeof null is "object" — a famous bug since JS was created in 1995 that can never be fixed. And typeof NaN is "number" — yes, Not-a-Number is a number!',
    gifPath: 'gifs/question2.gif',
  };
}
