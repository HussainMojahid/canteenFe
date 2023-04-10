import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './dashboard/nav/nav.component';
import { UserModule } from './user/user.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TimePipe } from './admin-dashboard/time-pipe';
import { SharedModule } from './shared/shared.module';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { ErrorInterceptor } from './interceptor/error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    BookingComponent,
    FeedbackComponent,
    TimePipe,
    ServerErrorComponent,
    TestErrorComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    FontAwesomeModule,
    DashboardModule,
    HttpClientModule,
    AdminDashboardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
