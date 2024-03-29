import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddNewMenuComponent } from './add-new-menu/add-new-menu.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
// import {FooterComponent} from './footer/footer.component'
import { FooterComponent } from './footer/footer.component';
import { FooterService } from '../services/footer.service';
import { AccordionComponent } from './accordion/accordion.component';
import { ReportComponent } from './report/report.component';
import { AddNewItemSecondComponent } from './add-new-item-second/add-new-item-second.component';
import { FoodCategoryComponent } from './food-category/food-category.component';
// 



@NgModule({
  declarations: [
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    InputComponent,
    AlertComponent,
    EditMenuComponent,
    AddNewMenuComponent,
    AddNewItemComponent,
    FooterComponent,
    AccordionComponent,
    ReportComponent,
    AddNewItemSecondComponent,
    FoodCategoryComponent,
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    TabComponent,
    TabsContainerComponent,
    ModalComponent,
    InputComponent,
    AlertComponent,
    FooterComponent,
    AccordionComponent,
 
  ]
})
export class SharedModule { }
