import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    InputComponent
  ]
})
export class SharedModule { }
