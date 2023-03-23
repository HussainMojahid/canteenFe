import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import ICurrentUser from '../models/currentUser.modal';
import IUser from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  Organization: any = [];
  constructor(public auth: AuthService, public http: HttpClient) {}
  getOrganization() {
    return this.http
      .get<any>(`${environment.apiUrl}organizations`)
      .subscribe((val) => {
        val.data.forEach((e: any) => {
          this.Organization.push(e);
        });
      });
  }

  sendResetLink(forgotForm: FormGroup) {
    return this.http.post<any>(`${environment.apiUrl}auth/forgot-password`, {
      email: forgotForm.value.email,
    });
  }
  changePasswordRequest(chnagePasswordForm: FormGroup) {
    return this.http
      .post<IUser>(`${environment.apiUrl}auth/change-password`, {
        password: chnagePasswordForm.value.password,
        currentPassword: chnagePasswordForm.value.currentPassword,
        passwordConfirmation: chnagePasswordForm.value.passwordConfirmation,
      })
      .pipe(
        map((user: IUser) => {
          localStorage.setItem('_token_canteen_app', JSON.stringify(user.jwt));
        })
      );
  }
}
