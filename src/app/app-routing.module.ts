import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponentComponent } from './quiz-component/quiz-component.component';

const routes: Routes = [
  { path: 'quiz-test', component: QuizComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
