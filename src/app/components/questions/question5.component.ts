import { Component, EventEmitter, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz.model';
import { QuizSlideComponent } from '../quiz-slide/quiz-slide.component';

@Component({
  selector: 'app-question5',
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
export class Question5Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  question: QuizQuestion = {
    questionNumber: 5,
    totalQuestions: 10,
    code: `NaN == NaN     // ???\nNaN === NaN    // ???`,
    questionText: 'What do these NaN comparisons return?',
    options: [
      'true and true',
      'true and false',
      'false and false',
      'false and true',
    ],
    correctIndex: 2,
    explanation:
      'Both are false! NaN is the only value in JavaScript that is not equal to itself — with either == or ===. Use Number.isNaN() to check for NaN instead!',
    gifPaths: ['gifs/question5.gif'],
  };
}
