import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import IUser from '../models/user.model';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  isAuthenticatedWithDelay = new Observable<boolean>();
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, public location: Location) {}

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
          localStorage.setItem(
            '_username_canteen_app',
            JSON.stringify(user.user.username)
          );
          localStorage.setItem(
            '_email_canteen_app',
            JSON.stringify(user.user.email)
          );

          return user;
        })
      );
  }

  registration(registerForm: FormGroup) {
    console.log(registerForm.value.username);

    return this.http
      .post<IUser>(`${environment.apiUrl}auth/local/register`, {
        username: registerForm.value.username,
        email: registerForm.value.email,
        password: registerForm.value.password,
      })

      .pipe(
        map((user: IUser) => {
          localStorage.setItem('_token_canteen_app', JSON.stringify(user.jwt));
          localStorage.setItem(
            '_username_canteen_app',
            JSON.stringify(user.user.username)
          );
          localStorage.setItem(
            '_email_canteen_app',
            JSON.stringify(user.user.email)
          );
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('_token_canteen_app');
    localStorage.removeItem('_email_canteen_app');
    localStorage.removeItem('_username_canteen_app');
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
  // setCurrentUser(user: IUser) {
  //   localStorage.setItem('user', JSON.stringify(user));
  // }

  update(registerForm: FormGroup) {
    console.log(registerForm.value.username);

    return this.http
      .post<IUser>(`${environment.apiUrl}auth/local/register`, {
        username: registerForm.value.username,
        email: registerForm.value.email,
        password: registerForm.value.password,
      })

      .pipe(
        map((user: IUser) => {
          localStorage.setItem('_token_canteen_app', JSON.stringify(user.jwt));
          localStorage.setItem(
            '_username_canteen_app',
            JSON.stringify(user.user.username)
          );
          localStorage.setItem(
            '_email_canteen_app',
            JSON.stringify(user.user.email)
          );
          return user;
        })
      );
  }

  backbutton() {
    this.location.back();
  }

  getCurrentUserToken() {
    return JSON.parse(localStorage.getItem('_token_canteen_app') || '');
  }
}
