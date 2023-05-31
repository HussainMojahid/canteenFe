import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DashboardModalComponent } from './dashboard/dashboard-modal/dashboard-modal.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import {RegisterComponent } from './user/register/register.component'
// import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './user/account/account.component';
import { EditMenuComponent } from './shared/edit-menu/edit-menu.component';
import { FoodInventoryComponent } from './admin-dashboard/food-inventory/food-inventory.component';
import { AddFoodComponent } from './admin-dashboard/add-food/add-food.component';
import { AddNewMenuComponent } from './shared/add-new-menu/add-new-menu.component';
import { AddNewItemComponent } from './shared/add-new-item/add-new-item.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardModalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registerComponent',
    component: RegisterComponent
  },
  {
    path: 'Account',
    component: AccountComponent,
    canActivate : [AuthGuard]
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
    canActivate : [AuthGuard]
  },
  {
    path: 'editMenu',
    component: EditMenuComponent,
    canActivate : [AuthGuard]
  },
  
  {
    path: 'foodInventory',
    component: FoodInventoryComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'addFood',
    component: AddFoodComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'addNewMenu',
    component: AddNewMenuComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'addNewItem',
    component: AddNewItemComponent,
    canActivate : [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
