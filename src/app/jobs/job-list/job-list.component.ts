import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  showLoader: boolean = true;

  list$ = this.jobService.getJobs();

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.simulateLoader();
  }

  simulateLoader() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }
}
