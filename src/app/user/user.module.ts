import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    AuthModalComponent,
    LoginComponent
  ]
})
export class UserModule { }
