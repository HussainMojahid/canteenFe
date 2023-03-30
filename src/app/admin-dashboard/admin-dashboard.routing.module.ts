import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { IsAdminGuard } from '../services/is-admin.guard';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodInventoryComponent } from './food-inventory/food-inventory.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

const routes: Routes = [
  {
    path: 'foodInventory',
    component: FoodInventoryComponent,
    canActivate:[IsAdminGuard]
  },
  {
    path: 'addfood',
    component: AddFoodComponent,
    canActivate:[IsAdminGuard]

  },
  {
    path:'updatefood/:id',
    component: UpdateFoodComponent,
    canActivate:[IsAdminGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
