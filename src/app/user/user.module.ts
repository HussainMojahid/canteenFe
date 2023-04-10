import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PleaseLoginComponent } from './please-login/please-login.component';
import { UserTabComponent } from './user-tab/user-tab.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserRoutingModule } from './user.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { BackButtonComponent } from '../shared/back-button/back-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
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
    ResetPasswordComponent,
    ProfileComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    
  ],
  exports: [AuthModalComponent,PleaseLoginComponent,UserTabComponent,ForgetPasswordComponent],
  providers : [
  ]
})
export class UserModule {}
