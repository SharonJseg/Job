import { Injectable } from '@angular/core';
import { IJob } from '../jobs/interface/job.interface';
import { JOBS } from '../jobs/interface/job.mock';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  userName?: string = '';
  public jobs = [...JOBS];

  constructor() {}

  setUsername(name: string) {
    this.userName = name;
  }
}
