import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(public auth : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(">>>>>."+this.auth.getCurrentUserToken());
    
    if(this.auth.getCurrentUserToken() !== ''){
      request = request.clone({
        setHeaders : {
          Authorization : `${this.auth.getCurrentUserToken()}`
        }
      })

    }
    return next.handle(request);
  }
}
