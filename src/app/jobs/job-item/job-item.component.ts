import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { IJob } from '../interface/job.interface';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss'],
})
export class JobItemComponent implements OnInit {
  @Input() job?: IJob;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {}

  openJobDetails(obj?: any) {
    // this.jobService.setJobDetails(obj);
    console.log(obj);
  }
}
