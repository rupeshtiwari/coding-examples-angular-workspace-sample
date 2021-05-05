import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLoginComponent } from 'projects/ui-login/src/public-api';
import { CoursesComponent } from './coures/courses/courses.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  {
    path: 'fsms-courses-angular-app',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: UiLoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
