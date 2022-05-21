import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobItemComponent } from './job-item/job-item.component';

@NgModule({
  declarations: [JobsComponent, JobItemComponent],
  imports: [CommonModule],
  exports: [JobsComponent],
})
export class JobsModule {}
