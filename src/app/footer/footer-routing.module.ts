import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardModalComponent} from 'src/app/dashboard/dashboard-modal/dashboard-modal.component'
// import {RegisterComponent} from 'src/app/user/register/register.component'
import { AccountComponent } from 'src/app/user/account/account.component';

const routes: Routes = [
  {
    path: 'Account',
    component: AccountComponent,
  },
  {
    path: 'dashbord-modal',
    component: DashboardModalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
