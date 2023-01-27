import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.getCurrentUserToken() !== null) {
      httpRequest = httpRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getCurrentUserToken()}`,
        },
      });
    }
    return next.handle(httpRequest);
  }
}
