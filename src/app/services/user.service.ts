import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
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

  sendResetLink(forgotForm : FormGroup){
    return this.http.post<any>(`${environment.apiUrl}auth/forgot-password`,{
      email:forgotForm.value.email
    })
  }
}
