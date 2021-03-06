import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IJob } from '../interface/job.interface';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobItemComponent implements OnInit {
  @Input() job?: IJob;

  constructor() {}

  ngOnInit(): void {}
}
