import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {DashboardModalComponent} from 'src/app/dashboard/dashboard-modal/dashboard-modal.component'
import {FeedbackComponent} from 'src/app/feedback/feedback.component'
// import {} from 'src/app/dashboard/'

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
        path: 'Account',
        component: AccountComponent,
      },
      {
        path:'dashbord-modal',
        component: DashboardModalComponent
      },
      {
        path:'Feedback',
        component: FeedbackComponent
      }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
