import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import IUser from '../models/user.model';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import ICurrentUser from '../models/currentUser.modal';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { EventEmitter } from '@angular/core';

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
  userRole = new EventEmitter<string>();


  constructor(private http: HttpClient, public location: Location, public router:Router) {}
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
        EmpId : registerForm.value.EmployeeId
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
    window.location.reload()
    this.router.navigateByUrl('loginComponent');
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
  forgotPassword(data: FormGroup) {
    return this.http.post(this.baseUrl + 'auth/forgot-password', {
      email:data.value.email
    }).pipe(
    
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
            this.userRole.emit(data.role.name)
            return data.role.name;
          })
        );
    }
    return;
  }
}
