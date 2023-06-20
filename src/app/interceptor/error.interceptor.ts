import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// const { toast, snackbar } = require('tailwind-toast');

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastr: ToastrService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.error.details.errors) {
                console.log(error.error.error.details.errors);
                
                const modelStateErrors = [];
                for (const key in error.error.error.details.errors) {
                  console.log("Im here");
                  
                  if (error.error.error.details.errors[key]) {
                    console.log(error.error.error.details.errors[key]);
                    
                    this.toastr.error(
                      error.error.error.details.errors[key].message,
                      // error.status.toString()
                    );
                    
                    
                    modelStateErrors.push(error.error.error.details.errors[key]);
                  }
                }
                throw modelStateErrors.flat();
              } else {
                this.toastr.error(
                  error.error.error.message,
                  // error.status.toString()
                );
              }
              break;
            case 401:
              this.toastr.error('Unauthorised', error.status.toString());
              break;
            case 403:
              this.toastr.error('Forbidden', error.status.toString());
              break;
            case 404:
              this.router.navigateByUrl('/not-found');
              break;
            case 500:
              this.toastr.error('Internal Server Error');

              break;
            case 429:
              this.toastr.error("Too Many Requests")
              break;
            default:
              this.toastr.error('Something unexpected went wrong');

              break;
          }
        }
        throw error;
      })
    );
  }
}