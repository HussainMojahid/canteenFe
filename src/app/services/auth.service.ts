import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import IUser from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = true;

  constructor(private http: HttpClient) {}

   login(username: string, password: string) {

    return this.http
      .post<IUser>(`${environment.apiUrl}auth/local`, {
        identifier: username,
        password: password,
      })

      .pipe(
        map((user: IUser) => {
          localStorage.setItem('user', JSON.stringify(user));
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
  }
}
