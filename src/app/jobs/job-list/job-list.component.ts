import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  public jobs = this.jobService?.jobs

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }

}
