import { Component, EventEmitter, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz.model';
import { QuizSlideComponent } from '../quiz-slide/quiz-slide.component';

@Component({
  selector: 'app-question7',
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
export class Question7Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  question: QuizQuestion = {
    questionNumber: 7,
    totalQuestions: 10,
    code: `+!+[]`,
    questionText: 'What does this expression evaluate to?',
    options: ['0', '1', 'NaN', 'true'],
    correctIndex: 1,
    explanation:
      'Reading right to left: +[] is 0 (unary + on empty array). !0 is true (negation). +true is 1 (unary + coerces boolean to number). This is how JSF**k encodes the number 1!',
  };
}
