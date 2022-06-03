import { Injectable } from '@angular/core';
import { IJob } from '../jobs/interface/job.interface';
import { JOBS } from '../jobs/interface/job.mock';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap, tap } from 'rxjs';

const BASE_URL = `http://localhost:3001`;

@Injectable({
  providedIn: 'root',
})
export class JobService {
  userName: string | null = localStorage.getItem('username');

  jobs = [...JOBS].length;

  jobsLength?: number;

  constructor(private httpClient: HttpClient) {}

  getJobs(): Observable<IJob[]> {
    return this.httpClient.get<IJob[]>(`${BASE_URL}/jobs`).pipe(
      tap((res) => {
        this.jobsLength = res.length;
      })
    );
  }

  generateHSLColor() {
    const hue = Math.floor(Math.random() * 24 * 15);
    const sat = Math.floor(Math.random() * 101);
    const lig = Math.floor(Math.random() * 101);

    return `hsl(${hue}, ${sat}%, ${lig}%)`;
  }

  addJob(formData: {}, requirements: string, role: string): Observable<IJob[]> {
    const updatedFormData = {
      ...formData,
      logo: './assets/images/job-logo-white-md.svg',
      logoBackground: this.generateHSLColor(),
      postedAt: '1sec ago',
      requirements: {
        content: requirements,
      },
      role: {
        content: role,
      },
    };
    return this.httpClient.post<IJob[]>(`${BASE_URL}/jobs`, updatedFormData);
    // .pipe(tap((res) => console.log(res)));
  }

  getJobsById(id: number): Observable<IJob> {
    return this.httpClient.get<IJob>(`${BASE_URL}/jobs/${id}`).pipe(
      tap((job) => {
        // console.log(job);
      })
    );
  }

  applyToJob(id: number, isApplied: boolean): Observable<IJob> {
    return this.httpClient.patch<IJob>(`${BASE_URL}/jobs/${id}`, {
      isApplied: !isApplied,
    });
  }
}
