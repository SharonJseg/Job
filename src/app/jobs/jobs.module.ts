import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobItemComponent } from './job-item/job-item.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { Routes, RouterModule } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar.component';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
  },
  {
    path: 'job-details/:id',
    component: JobDetailsComponent,
  },
];

@NgModule({
  declarations: [
    JobsComponent,
    JobItemComponent,
    JobDetailsComponent,
    TopbarComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [JobsComponent],
})
export class JobsModule {}
