import { Component, OnInit } from '@angular/core';
import { JOBS } from './interface/job.mock';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  public jobs = [...JOBS];

  constructor() {}

  ngOnInit(): void {}
}
