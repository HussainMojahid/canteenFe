import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from '../interceptor/interceptor.interceptor';
import { PleaseLoginComponent } from './please-login/please-login.component';
import { UserTabComponent } from './user-tab/user-tab.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserRoutingModule } from './user.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccountComponent } from './account/account.component';
import { AccordionComponent } from '../shared/accordion/accordion.component';
import { AppModule } from '../app.module';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { ProfileComponent } from './profile/profile.component';
// import {FooterComponent} from 'src/app/footer/footer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from '../interceptor/error.interceptor';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthModalComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    PleaseLoginComponent,
    UserTabComponent,
    EditProfileComponent,
    AccountComponent,
   
    AboutComponent,
    ProfileComponent,
    // ResetPasswordComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,
    FontAwesomeModule,
    // AppModule
    BrowserAnimationsModule,
    ToastrModule.forRoot({

      positionClass: 'toast-bottom-right',

    }),
    
  ],
  exports: [
    AuthModalComponent,
    PleaseLoginComponent,
    UserTabComponent,
    LoginComponent,
    RegisterComponent,

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
})
export class UserModule {}
