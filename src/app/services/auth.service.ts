import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import IUser from '../models/user.model';
import { Router } from '@angular/router';
import IRegister from '../models/register.model';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  isAuthenticatedWithDelay = new Observable<boolean>();
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    if (null !== localStorage.getItem('_token_canteen_app')) {
      this.isAuthenticated$.next(true);
      this.isAuthenticatedWithDelay = this.isAuthenticated$.pipe(delay(1000));
    } else {
      this.isAuthenticated$.next(false);
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

  registration(registerForm: FormGroup) {
    console.log(registerForm.value.username);
    
    return this.http
      .post<IUser>(`${environment.apiUrl}auth/local/register`, {
        username : registerForm.value.username,
        email : registerForm.value.email,
        password : registerForm.value.password

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

  feedback(model: any) {
    return this.http.post(this.baseUrl + '/feedback', model).pipe(
      map((user) => {
        if (user) {
          // this.setCurrentUser(user);
        }
      })
    );
  }
  setCurrentUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
