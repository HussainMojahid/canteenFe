import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFoodComponent } from './add-food/add-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { DeleteFoodComponent } from './delete-food/delete-food.component';
import { FoodInventoryComponent } from './food-inventory/food-inventory.component';
import { AdminDashboardRoutingModule } from './admin-dashboard.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AddFoodComponent,
    UpdateFoodComponent,
    DeleteFoodComponent,
    FoodInventoryComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, AdminDashboardRoutingModule],
  exports: [],
})
export class AdminDashboardModule {}
