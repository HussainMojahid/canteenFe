import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodInventoryComponent } from './food-inventory/food-inventory.component';

const routes: Routes = [
  {
    path: 'foodInventory',
    component: FoodInventoryComponent,
  },
  {
    path: 'addfood',
    component: AddFoodComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
