import { Component, EventEmitter, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz.model';
import { QuizSlideComponent } from '../quiz-slide/quiz-slide.component';

@Component({
  selector: 'app-question6',
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
export class Question6Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  question: QuizQuestion = {
    questionNumber: 6,
    totalQuestions: 10,
    code: `[] + []        // ???\n[] + {}        // ???`,
    questionText: 'What do these additions return?',
    options: [
      '0 and NaN',
      '"" and "[object Object]"',
      '[] and {}',
      'undefined and undefined',
    ],
    correctIndex: 1,
    explanation:
      'Arrays and objects are converted to strings with +. An empty array becomes "", so [] + [] = "". An object becomes "[object Object]", so [] + {} = "" + "[object Object]" = "[object Object]".',
    gifPath: 'gifs/question6.gif',
  };
}
