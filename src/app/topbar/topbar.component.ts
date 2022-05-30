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
    private jobService: JobService,
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.authService
    //   .getUser()
    //   .pipe(tap((user) => this.user$.next(user)))
    //   .subscribe();
  }

  onLogout() {
    // this.authService
    //   .getUser()
    //   .pipe(tap((user) => this.user$.next(null)))
    //   .subscribe((user) => console.log(user));
    this.router.navigate(['/login']).then((res) => {
      localStorage.clear();
    });
  }
}
