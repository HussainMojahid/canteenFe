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
  {
    path: 'editMenu',
    component: EditMenuComponent,
  },
  
  {
    path: 'foodInventory',
    component: FoodInventoryComponent,
  },
  {
    path: 'addFood',
    component: AddFoodComponent,
  },
  {
    path: 'addNewMenu',
    component: AddNewMenuComponent,
  },
  {
    path: 'addNewItem',
    component: AddNewItemComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
