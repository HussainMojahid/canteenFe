import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodSectionComponent } from './food-section/food-section.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { DashboardModalComponent } from './dashboard-modal/dashboard-modal.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FoodPostComponent } from './food-post/food-post.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FoodSectionComponent,
    FoodCardComponent,
    ChartCardComponent,
    DashboardModalComponent,
    WelcomeCardComponent,
    FoodPostComponent,
  ],
  exports: [DashboardModalComponent],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    DashboardRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class DashboardModule {}
