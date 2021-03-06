import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, Subject, tap } from "rxjs";
import { User } from '../jobs/interface/user.inteface';

const BASE_URL = `http://localhost:3001`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$: ReplaySubject<User | null> = new ReplaySubject<User | null>(1);

  private isAuthenticated = false;

  getIsAuth() {
    return this.isAuthenticated;
  }

  constructor(private httpClient: HttpClient) {}

  lookupUser(
    currentUsername: string,
    currentPassword: string
  ): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `${BASE_URL}/users?email=${currentUsername}&&password=${currentPassword}`
    );
  }

  setUser(username: string, password: string) {
    this.lookupUser(username, password)
      .pipe(
        tap((user) => {
          this.user$.next(user[0]);
          this.isAuthenticated = true;
        })
      )
      .subscribe();
  }

  // getUser() {
  //   return this.user$.asObservable();
  // }

  logOut() {
    return this.user$.next(null);
    this.isAuthenticated = false;
    localStorage.clear()
  }
}
