import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomeComponent} from './home/home.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';


const routes: Routes = [
  {path : 'courses/:courseId/quizzes/:quizId', component: QuizComponent},
  {path : 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path : '', component: HomeComponent},
  {path : 'courses', component: CourseListComponent},
  {path : 'courses/:courseId', component: CourseViewerComponent},
  {path : 'courses/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path : 'courses/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

