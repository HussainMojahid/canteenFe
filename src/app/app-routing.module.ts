import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DashboardModalComponent } from './dashboard/dashboard-modal/dashboard-modal.component';
import { FeedbackComponent } from './feedback/feedback.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { ChangePasswordComponent } from './user/change-password/change-password.component';
// import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
// import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import {RegisterComponent } from './user/register/register.component'
// import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './user/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardModalComponent,
  },
  {
    path: 'registerComponent',
    component: RegisterComponent
  },{
    path: 'Account',
    component: AccountComponent,
  },
  {
    path: 'dashbord-modal',
    component: DashboardModalComponent
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
