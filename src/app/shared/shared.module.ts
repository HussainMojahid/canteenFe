import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    InputComponent,
    AlertComponent
  ]
})
export class SharedModule { }
