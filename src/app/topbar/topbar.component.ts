import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  userName?: string = this.jobService?.userName;
  constructor(private jobService: JobService) {}

  ngOnInit(): void {}
}
