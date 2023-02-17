import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodInventoryComponent } from './food-inventory/food-inventory.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

const routes: Routes = [
  {
    path: 'foodInventory',
    component: FoodInventoryComponent,
  },
  {
    path: 'addfood',
    component: AddFoodComponent,
  },
  {
    path:'updatefood/:id',
    component: UpdateFoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
