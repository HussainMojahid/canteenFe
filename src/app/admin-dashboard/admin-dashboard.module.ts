import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFoodComponent } from './add-food/add-food.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

import { FoodInventoryComponent } from './food-inventory/food-inventory.component';
import { AdminDashboardRoutingModule } from './admin-dashboard.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
  ],
  exports: [],
})
export class AdminDashboardModule {}
