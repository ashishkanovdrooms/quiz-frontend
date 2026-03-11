import { Component, EventEmitter, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz.model';
import { QuizSlideComponent } from '../quiz-slide/quiz-slide.component';

@Component({
  selector: 'app-question10',
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
export class Question10Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  question: QuizQuestion = {
    questionNumber: 10,
    totalQuestions: 10,
    code: `(![]+[])[0] + (![]+[])[1] +\n([][[]]+[])[5] + (![]+[])[2]`,
    questionText: 'FINAL BOSS: What does this evaluate to?',
    options: ['"NaNi"', '"fail"', '"NaNo"', '"flex"'],
    correctIndex: 1,
    explanation:
      'It spells "fail". ![] is false → (![]+[]) is "false". "false"[0]="f", [1]="a", [2]="l". Then [][[]] is undefined → ([][[]]+[]) is "undefined", and "undefined"[5]="i". Put together: "f"+"a"+"i"+"l" = "fail"!',
    gifPaths: ['gifs/question10.gif', 'gifs/question10-1.gif', 'gifs/question10-2.gif'],
  };
}
