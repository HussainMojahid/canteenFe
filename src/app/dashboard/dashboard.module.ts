import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodSectionComponent } from './food-section/food-section.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { DashboardModalComponent } from './dashboard-modal/dashboard-modal.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FoodPostComponent } from './food-post/food-post.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodInventoryComponent } from '../admin-dashboard/food-inventory/food-inventory.component';
import { DayToggleButtonComponent } from '../shared/day-toggle-button/day-toggle-button.component';

@NgModule({
  declarations: [
    FoodSectionComponent,
    FoodCardComponent,
    ChartCardComponent,
    DashboardModalComponent,
    WelcomeCardComponent,
    FoodPostComponent,
    DayToggleButtonComponent    
  ],
  imports: [
    CommonModule

  ],
  exports : [
    DashboardModalComponent
  ]
})
export class DashboardModule { }
