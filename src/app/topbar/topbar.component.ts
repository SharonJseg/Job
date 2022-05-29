import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent implements OnInit {
  // userName: string | null = '';
  userName: string | null = localStorage.getItem('username');

  constructor(private jobService: JobService, public router: Router) {}

  ngOnInit(): void {
    // this.userName = this.jobService.getUsername();
  }

  onLogout() {
    this.router.navigate(['/login']).then((res) => {
      localStorage.clear();
    });
  }
}
