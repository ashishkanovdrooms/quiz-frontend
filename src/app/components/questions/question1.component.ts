import { Component, EventEmitter, Output } from '@angular/core';
import { QuizQuestion } from '../../models/quiz.model';
import { QuizSlideComponent } from '../quiz-slide/quiz-slide.component';

@Component({
  selector: 'app-question1',
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
export class Question1Component {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  question: QuizQuestion = {
    questionNumber: 1,
    totalQuestions: 10,
    code: `('b' + 'a' + + 'a' + 'a').toLowerCase()`,
    questionText: 'What does this expression evaluate to?',
    options: ['"baaa"', '"banana"', '"baNaNa"', 'TypeError'],
    correctIndex: 1,
    explanation:
      'The + before the second \'a\' tries to convert it to a number, resulting in NaN. String concatenation gives "b" + "a" + "NaN" + "a" = "baNaNa", and toLowerCase() makes it "banana"! 🍌',
  };
}
