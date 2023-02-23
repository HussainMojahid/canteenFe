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



@NgModule({
  declarations: [
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    InputComponent,
    AlertComponent,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports:[
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    InputComponent,
    AlertComponent,
    BackButtonComponent
  ]
})
export class SharedModule { }
