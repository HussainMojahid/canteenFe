import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
    {
        path: 'edit',
        component: EditProfileComponent,
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent,
      },
      {
        path: 'forgotPassword',
        component: ForgetPasswordComponent,
      }, 
      {
        path : 'resetPassword',
        component: ResetPasswordComponent,
      },
      {
        path:'profile',
        component:ProfileComponent 
        
      }
     
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
