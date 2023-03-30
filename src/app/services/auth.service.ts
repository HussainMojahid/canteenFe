import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import ICurrentUser from '../models/currentUser.modal';
import IUser from '../models/user.model';
const sign = require('jwt-encode');

interface Role {
  role: string;
}
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
    let temp : any;
    const role_token = localStorage.getItem('_role_canteen_app');
    if (role_token != null) {
       temp = jwt_decode<Role>(role_token);
    }
    if (temp != null) {
      if ('canteenAdmin' === temp.role) return true;
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
    return this.http
      .post<IUser>(`${environment.apiUrl}auth/local/register`, {
        username: registerForm.value.username,
        email: registerForm.value.email,
        EmpId: registerForm.value.EmployeeId,
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
    window.location.reload();
  }

  feedback(model: any) {
    let feedback = {data : {
      "users_permissions_user": this.getID(),
      "message": model.message,
      "Issue": model.subject
    }}
    return this.http.post(this.baseUrl + 'feedbacks', feedback).pipe(
      map((user) => {
      })
    );
  }
  setCurrentUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  update(registerForm: FormGroup, id: number) {
    return this.http
      .put<IUser>(`${environment.apiUrl}users/${id}`, {
        username: registerForm.value.username,
        email: registerForm.value.email,
        password: registerForm.value.password,
      })

      .pipe(
        map((user: IUser) => {
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

  emgBooking(bookingForm: FormGroup) {
    return this.http.post(`${environment.apiUrl}emg-bookings`, {
      data: {
        users_permissions_user: this.getID(),
        Date: bookingForm.value.Date,
        Time: `${bookingForm.value.Time}:01`,
      },
    });
  }

  getListOfBooking(){
    return this.http.get(`${environment.apiUrl}emg-bookings`)

  }

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
    const secret = environment.JWT_SEC;
    this.getRole()!
      .pipe(
        map((val) => {
          localStorage.setItem(
            '_role_canteen_app',
            JSON.stringify(sign({ role: val }, secret))
          );

          return val;
        })
      )
      .subscribe();
  }

  getID(): number {
    const token = this.getCurrentUserToken();
    if (token !== null) {
      let a: any = jwt_decode(token);
      return a.id as number;
    }
    return -1;
  }
  getRole() {
    const token = this.getCurrentUserToken();
    if (token !== null) {
      let a: any = jwt_decode(token);
      return this.http
        .get<any>(`${environment.apiUrl}users/${a.id}?populate=*`)
        .pipe(
          map((data) => {
            return data.role.name;
          })
        );
    }
    return;
  }
}
