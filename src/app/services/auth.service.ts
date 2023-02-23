import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import IUser from '../models/user.model';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import ICurrentUser from '../models/currentUser.modal';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  isAuthenticatedWithDelay = new Observable<boolean>();
  user$ = new BehaviorSubject<ICurrentUser | null>(null);
  baseUrl = environment.apiUrl;
  UserID = -1;

  constructor(private http: HttpClient, public location: Location) {}

  isAdmin(): boolean {
    const temp = localStorage.getItem('_role_canteen_app');
    if (temp != null) {
      if ('canteenAdmin' === JSON.parse(temp)) return true;
    }
    return false;
  }

  isAuthenticated() {
    if (null !== localStorage.getItem('_token_canteen_app')) {
      this.isAuthenticated$.next(true);
      this.isAuthenticatedWithDelay = this.isAuthenticated$.pipe(delay(1000));
      this.getCurrentRole();
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
          this.UserID = user.user.id;
          localStorage.setItem('_token_canteen_app', JSON.stringify(user.jwt));
          localStorage.setItem(
            '_username_canteen_app',
            JSON.stringify(user.user.username)
          );
          localStorage.setItem(
            '_email_canteen_app',
            JSON.stringify(user.user.email)
          );
          this.user$.next(user.user);
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
    localStorage.clear();
  }

  feedback(model: any) {
    return this.http.post(this.baseUrl + '/feedback', model).pipe(
      map((user) => {
        if (user) {
          
        }
      })
    );
  }
  setCurrentUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  update(registerForm: FormGroup, id: number) {
    console.log(registerForm.value.username);

    return this.http
      .put<IUser>(`${environment.apiUrl}users/${id}`, {
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

  // getUser(username: string) {
  //   return this.http.get<IUser>(`${environment.apiUrl}user/` + username);
  // }

  backbutton() {
    this.location.back();
  }

  getCurrentUserToken(): string | null {
    const token = localStorage.getItem('_token_canteen_app');
    if (token) {
      return JSON.parse(token);
    }
    return null;
  }

  getCurrentUser() {
    return this.http.get<any>(`${environment.apiUrl}users/me`);
  }

  getCurrentRole() {
    this.getRole(this.UserID)
      .pipe(
        map((val) => {
          localStorage.setItem('_role_canteen_app', JSON.stringify(val));

          return val;
        })
      )
      .subscribe();
  }

  getRole(id: number) {
    return this.http
      .get<any>(`${environment.apiUrl}users/${id}?populate=*`)
      .pipe(
        map((data) => {
          return data.role.name;
        })
      );
  }
}
