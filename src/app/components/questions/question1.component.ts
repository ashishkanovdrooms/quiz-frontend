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
    code: `'B' + 'a' + + 'a' + 'a'`,
    questionText: 'What does this expression evaluate to?',
    options: ['"Baaa"', '"BaNaNa"', '"Baba"', '"Ba+aa"'],
    correctIndex: 1,
    explanation:
      'The + before the second \'a\' tries to convert it to a number, resulting in NaN. String concatenation gives "B" + "a" + "NaN" + "a" = "BaNaNa"! 🍌',
    gifPaths: ['gifs/question1.gif'],
  };
}
