import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavComponent } from './dashboard/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
// import { ProfileComponent } from './user/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './shared/accordion/accordion.component';


import { SharedModule } from "./shared/shared.module";

// import { FooterComponent } from './shared/footer/footer.component';

// import { AccountComponent } from './user/account/account.component';
import {DatePipe} from '@angular/common'
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FeedbackHistoryComponent } from './feedback-history/feedback-history.component';
//  import {FootersModule} from './footer/footers.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { EmployeeFeedbackComponent } from './shared/employee-feedback/employee-feedback.component';

@NgModule({
    declarations: [
        AppComponent,
        // NavComponent,
        SidebarComponent,
        BookingComponent,
        FeedbackComponent,
        FeedbackHistoryComponent,
        // ProfileComponent,
        // AccountComponent,
        // LoginComponent,
    ],
    imports: [
        BrowserModule,
        UserModule,
        // LoginComponent,
        FontAwesomeModule,
        // DashboardModule,
        HttpClientModule,
        RouterModule,
        AdminDashboardModule,
        AppRoutingModule,
        FormsModule,
        NgxOtpInputModule,
        SharedModule,
        // FootersModule
        BrowserAnimationsModule,
        
       
    ],exports:[],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorInterceptor,
            multi: true,
            
        }, {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
          },DatePipe
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
