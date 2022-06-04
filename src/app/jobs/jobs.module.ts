import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobItemComponent } from './job-item/job-item.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { Routes, RouterModule } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar.component';
import { JobListComponent } from './job-list/job-list.component';
import { LayoutComponent } from './layout/layout.component';
import {
  ApplicationNotationModule,
  DetailsBoxModule,
  InputModule,
  LoaderModule,
  SideButtonModule,
} from '@job-common';
import { JobCreateComponent } from './job-create/job-create.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: JobsComponent,
  },
  {
    path: 'create',
    component: JobCreateComponent,
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
    JobListComponent,
    LayoutComponent,
    JobCreateComponent,
  ],
  imports: [
    CommonModule,
    LoaderModule,
    DetailsBoxModule,
    InputModule,
    ReactiveFormsModule,
    SideButtonModule,
    ApplicationNotationModule,
    RouterModule.forChild(routes),
  ],
  exports: [JobsComponent],
})
export class JobsModule {}
