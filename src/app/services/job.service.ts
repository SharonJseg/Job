import { Injectable } from '@angular/core';
import { JOBS } from '../jobs/interface/job.mock';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  userName?: string = 'Sharon Segal';
  public jobs = [...JOBS];
  public job = {};
  constructor() {}

  setJobDetails(obj: object) {
    this.job = obj;
    console.log(this.job);
  }
}
