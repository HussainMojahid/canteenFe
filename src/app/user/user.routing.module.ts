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
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../services/auth.guard';
import { AddNewItemFirstComponent } from '../shared/add-new-item-first/add-new-item-first.component';
import { EmployeeFeedbackComponent } from '../shared/employee-feedback/employee-feedback.component';



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
        canActivate : [AuthGuard]
        
      },
      {
        path: 'changePassword',
        component: ChangePasswordComponent,
        canActivate : [AuthGuard]
        
      },
      {
        path: 'forgotPassword',
        component: ForgetPasswordComponent,
        
        
      },
      {
        path: 'inviteFriend',
        component: InviteFriendComponent,
        canActivate : [AuthGuard]
        
      },
      {
        path: 'about',
        component: AboutComponent,
        canActivate : [AuthGuard]
        
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate : [AuthGuard]
        
      },
      {
        path: 'registerComponent',
        component: RegisterComponent,
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
        component: FeedbackComponent,
        canActivate : [AuthGuard]
        
      },
      {
        path: 'addNewItemFirst',
        component: AddNewItemFirstComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'employeeFeedback',
        component: EmployeeFeedbackComponent,
        canActivate : [AuthGuard]
      }
       
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
