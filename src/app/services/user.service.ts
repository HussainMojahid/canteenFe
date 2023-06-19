import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
