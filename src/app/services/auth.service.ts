import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import IUser from '../models/user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  isAuthenticatedWithDelay =new Observable<boolean>;

  constructor(private http: HttpClient) {
  
  }

  isAuthenticated(){
    if(null !== localStorage.getItem('_token_canteen_app')){
      this.isAuthenticated$.next(true);
      this.isAuthenticatedWithDelay = this.isAuthenticated$.pipe(delay(1000))
    }
    else{
      this.isAuthenticated$.next(false)
    }
  }

  login(username: string, password: string) {
  
    return this.http
      .post<IUser>(`${environment.apiUrl}auth/local`, {
        identifier: username,
        password: password,
      })

      .pipe(
        map((user: IUser) => {
          localStorage.setItem('_token_canteen_app', JSON.stringify(user.jwt));
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
  }
}
