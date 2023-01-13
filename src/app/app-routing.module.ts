import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DashboardModalComponent } from './dashboard/dashboard-modal/dashboard-modal.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardModalComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  
  // {
  //   path: 'changePassword',
  //   component: ChangePasswordComponent,
  // },
  // {
  //   path: 'forgotPassword',
  //   component: ForgetPasswordComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
