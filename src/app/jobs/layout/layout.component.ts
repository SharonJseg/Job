import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  // userName: string | null = localStorage.getItem('username');
  userName: string | null = localStorage.getItem('username');

  constructor(private jobService: JobService) {}

  ngOnInit(): void {}
}
