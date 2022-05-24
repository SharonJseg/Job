import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  userName?: string = this.jobService?.userName;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }

}
