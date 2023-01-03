import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodSectionComponent } from './food-section/food-section.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { DashboardModalComponent } from './dashboard-modal/dashboard-modal.component';




@NgModule({
  declarations: [
    FoodSectionComponent,
    FoodCardComponent,
    ChartCardComponent,
    DashboardModalComponent
  ],
  imports: [
    CommonModule

  ],
  exports : [
    DashboardModalComponent
  ]
})
export class DashboardModule { }
