import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from '../services/is-admin.guard';
import { FoodPostComponent } from './food-post/food-post.component';

const routes: Routes = [
  {
    path: 'addfood/:id',
    component: FoodPostComponent,
    canActivate:[IsAdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
