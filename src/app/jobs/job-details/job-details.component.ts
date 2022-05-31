import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { IJob } from '../interface/job.interface';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobDetailsComponent implements OnInit {
  public job$: Observable<IJob | undefined> = this.activatedRoute.params.pipe(
    switchMap((params) => {
      return this.jobService.getJobsById(params['id']);
    })
  );

  jobLength?: number | boolean | undefined = this.jobService.jobsLength;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private jobService: JobService
  ) {}

  ngOnInit(): void {}

  nextJob(id: number) {
    // @ts-ignore
    return id >= this.jobLength
      ? this.router.navigate(['/jobs/job-details/1'])
      : this.router.navigate(['/jobs/job-details/' + (id + 1)]);
  }

  lastJob(id: number) {
    return this.router.navigate(['/jobs/job-details/' + (id - 1)]);
  }
}
