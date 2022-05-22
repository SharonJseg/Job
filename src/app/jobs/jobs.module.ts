import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobItemComponent } from './job-item/job-item.component';
import { JobDetailsComponent } from './job-details/job-details.component';

@NgModule({
  declarations: [JobsComponent, JobItemComponent, JobDetailsComponent],
  imports: [CommonModule],
  exports: [JobsComponent],
})
export class JobsModule {}
