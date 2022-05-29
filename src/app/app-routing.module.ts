import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then((m) => m.JobsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./notfound/notfound.module').then((m) => m.NotfoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
