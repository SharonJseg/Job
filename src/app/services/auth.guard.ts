import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean | UrlTree> {
      const isAuth = this.authService.getIsAuth()

    if(!isAuth) {
      this.router.navigate(['/login'])
    }
    return isAuth;

    // return this.authService.getUser().pipe(
    //   map((user) => {
    //     // debugger;
    //     if (user) return true;
    //     else { return this.router.createUrlTree(['']);
    //   }
    //   })
    // );
  }
}
