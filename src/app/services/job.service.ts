import { Injectable } from '@angular/core';
import { IJob } from '../jobs/interface/job.interface';
import { JOBS } from '../jobs/interface/job.mock';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const BASE_URL = `http://localhost:3000/`;

@Injectable({
  providedIn: 'root',
})
export class JobService {
  userName: string | null = localStorage.getItem('username');

  jobs = [...JOBS].length;

  constructor(private httpClient: HttpClient) {}

  getJobs(): Observable<IJob[]> {
    return this.httpClient.get<IJob[]>(BASE_URL + 'jobs');
  }

  getJobsById(id: number): Observable<IJob> {
    return this.httpClient.get<IJob>(`${BASE_URL}jobs/${id}`).pipe(
      tap((job) => {
        // console.log(job);
      })
    );
  }

}
