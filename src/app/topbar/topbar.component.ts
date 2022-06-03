import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent implements OnInit {
  userName: string | null = localStorage.getItem('username');
  router = this._router.url;

  constructor(private _router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onLogout() {
    this.authService.logOut();
    this._router.navigate(['/login']).then((res) => {
      localStorage.clear();
    });
  }
}
