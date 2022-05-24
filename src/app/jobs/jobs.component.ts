import { Component, OnInit } from '@angular/core';
import { JOBS } from './interface/job.mock';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {

  public jobs = this.jobService?.jobs
  userName?: string = this.jobService?.userName;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {}
}
