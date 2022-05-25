import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { IJob } from '../interface/job.interface';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  private _currentId?: number;
  public job$: Observable<IJob | undefined> = this.getJob();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private jobService: JobService,

  ) {}

  ngOnInit(): void {

  }

  private getJob(): Observable<IJob | undefined> {
    // use activated route snapshot
    return this.activatedRoute.queryParams.pipe(
      map((param) => {
        // console.log();
        this._currentId = param['get']('id');
        console.log(this._currentId);
        return this.jobService.jobs.find((j) => j.id === this._currentId);
      })
    );
  }

  next() {
    return this.router.navigate([
      '/job-details/' + ((this._currentId as number) + 1),
    ]);
  }
}
