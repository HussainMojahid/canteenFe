import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DayToggleButtonComponent } from './day-toggle-button/day-toggle-button.component';
import { AddItemButtonComponent } from './add-item-button/add-item-button.component';
import { DashboardRoutingModule } from '../dashboard/dashboard.routing.module';
import { LeftArrowButtonComponent } from './arrowButtons/left-arrow-button/left-arrow-button.component';
import { RightArrowButtonComponent } from './arrowButtons/right-arrow-button/right-arrow-button.component';

@NgModule({
  declarations: [
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    InputComponent,
    AlertComponent,
    BackButtonComponent,
    DayToggleButtonComponent,
    AddItemButtonComponent,
    LeftArrowButtonComponent,
    RightArrowButtonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DashboardRoutingModule,
  ],
  exports: [
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    InputComponent,
    AlertComponent,
    BackButtonComponent,
    DayToggleButtonComponent,
    AddItemButtonComponent,
    LeftArrowButtonComponent,
    RightArrowButtonComponent,
  ],
})
export class SharedModule {}
