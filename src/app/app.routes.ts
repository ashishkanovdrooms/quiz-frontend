import { Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { UniversalLinksComponent } from './components/universal-links/universal-links.component';

export const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'universal-links', component: UniversalLinksComponent },
];
