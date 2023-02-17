import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFoodComponent } from './add-food/add-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

import { FoodInventoryComponent } from './food-inventory/food-inventory.component';
import { AdminDashboardRoutingModule } from './admin-dashboard.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddFoodComponent,
    UpdateFoodComponent,
    
    FoodInventoryComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AdminDashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class AdminDashboardModule {}
