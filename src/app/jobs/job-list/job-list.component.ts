import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  // public jobs = this.jobService?.jobs;

  showLoader: boolean = true;

  // list = this.jobService.getJobs().subscribe(job => {
  //   console.log(job);
  // })

  list$ = this.jobService.getJobs();

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.simulateLoader();
  }

  simulateLoader() {
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }
}
