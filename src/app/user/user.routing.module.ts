import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {DashboardModalComponent} from 'src/app/dashboard/dashboard-modal/dashboard-modal.component'
import {FeedbackComponent} from 'src/app/feedback/feedback.component'
import {LoginComponent} from 'src/app/user/login/login.component'
import {RegisterComponent} from 'src/app/user/register/register.component'
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import { AboutComponent } from './about/about.component';
// import { FooterComponent } from '../footer/footer.component';
// import {} from 'src/app/dashboard/'

const routes: Routes = [
      {
        path: 'loginComponent',
        component: LoginComponent
      },
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
        path: 'inviteFriend',
        component: InviteFriendComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      // {
      //   path: 'Account',
      //   component: AccountComponent,
      // },
      // {
      //   path: 'dashbord-modal',
      //   component: DashboardModalComponent
      // },
      {
        path: 'Feedback',
        component: FeedbackComponent
      }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
