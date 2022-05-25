import { Component, Input, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  public job = this.jobService?.job;
  constructor(private jobService: JobService) {}

  ngOnInit(): void {}

  getJobDetails() {
    this.job = this.jobService.getJobDetails();
    return this.job;
  }
}
