import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DashboardModalComponent } from './dashboard/dashboard-modal/dashboard-modal.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './user/register/register.component';
// import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './user/account/account.component';
import { EditMenuComponent } from './shared/edit-menu/edit-menu.component';
import { FoodInventoryComponent } from './admin-dashboard/food-inventory/food-inventory.component';
import { AddFoodComponent } from './admin-dashboard/add-food/add-food.component';
import { AddNewMenuComponent } from './shared/add-new-menu/add-new-menu.component';
import { AddNewItemComponent } from './shared/add-new-item/add-new-item.component';
import { AuthGuard } from './services/auth.guard';
import { FeedbackHistoryComponent } from './feedback-history/feedback-history.component';
import { ReportComponent } from './shared/report/report.component';
import { AddNewItemSecondComponent } from './shared/add-new-item-second/add-new-item-second.component';
import { FoodCategoryComponent } from './shared/food-category/food-category.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardModalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'feedback-history',
    component: FeedbackHistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addNewItemSecond',
    component: AddNewItemSecondComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'report',
    component: ReportComponent,
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
    path: 'food-category',
    component:FoodCategoryComponent
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
