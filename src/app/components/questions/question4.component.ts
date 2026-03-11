import { Component, EventEmitter, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz.model';
import { QuizSlideComponent } from '../quiz-slide/quiz-slide.component';

@Component({
  selector: 'app-question4',
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
export class Question4Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  question: QuizQuestion = {
    questionNumber: 4,
    totalQuestions: 10,
    code: `Boolean([])    // ???\nNumber([])     // ???\n[] == ![]      // ???`,
    questionText: 'What do these three expressions return?',
    options: [
      'true, 1, false',
      'false, 0, false',
      'true, 0, true',
      'false, 1, true',
    ],
    correctIndex: 2,
    explanation:
      'Boolean([]) is true because an empty array is a truthy value. Number([]) is 0 because when converting an empty array to a number, it first converts to an empty string "" and then to 0. [] == ![] is false because [] is truthy, so ![] is false, and [] == false evaluates to true due to type coercion rules.',
    gifPaths: ['gifs/question4.gif'],
  };
}
