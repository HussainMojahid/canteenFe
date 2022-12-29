import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    TabComponent,
    TabsContainerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TabComponent,
    TabsContainerComponent,
    ModalComponent
  ]
})
export class SharedModule { }
