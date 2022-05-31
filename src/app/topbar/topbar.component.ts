import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject, ReplaySubject, tap } from 'rxjs';
import { User } from '../jobs/interface/user.inteface';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent implements OnInit {
  // userName: string | null = '';
  userName: string | null = localStorage.getItem('username');

  user$: ReplaySubject<User | null> = new ReplaySubject<User | null>();

  constructor(
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logOut()
    this.router.navigate(['/login']).then((res) => {
      localStorage.clear();
    });
  }
}
