import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

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
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
