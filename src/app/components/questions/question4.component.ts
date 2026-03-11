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
    code: `[] == false    // ???\n[] == ![]      // ???`,
    questionText: 'What do these two comparisons return?',
    options: [
      'true and false',
      'false and false',
      'true and true',
      'false and true',
    ],
    correctIndex: 2,
    explanation:
      'Both are true! [] == false: the array is coerced to "" then to 0, and false to 0, so 0 == 0. [] == ![]: ![] is false, so it becomes [] == false — same trick. An array equals its own negation!',
    gifPath: 'gifs/question4.gif',
  };
}
