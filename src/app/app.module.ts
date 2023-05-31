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
import { SharedModule } from "./shared/shared.module";

// import { FooterComponent } from './shared/footer/footer.component';

// import { AccountComponent } from './user/account/account.component';
import {DatePipe} from '@angular/common'
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
// import {FootersModule} from './footer/footers.module'

@NgModule({
    declarations: [
        AppComponent,
        // NavComponent,
        SidebarComponent,
        BookingComponent,
        FeedbackComponent,
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
        AdminDashboardModule,
        AppRoutingModule,
        SharedModule
        // FootersModule
    ],exports:[],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorInterceptor,
            multi: true,
            
        },DatePipe
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
