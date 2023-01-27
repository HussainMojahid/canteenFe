import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from 'src/app/services/food.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.css'],
})
export class DashboardModalComponent implements OnInit {
  plusbutton = faPlus;
  // foodItemBreakFast: any[] = [];
  // foodItemLunch: any[] = [];
  // foodItemSnacks: any[] = [];

  constructor(public sidebar: SidebarService, public food: FoodService) {}
  ngOnInit(): void {
    if (this.food.selectedDay) {
      this.food.todayFood();
      console.log("called");
      
      // this.foodItemBreakFast = this.food.foodItemBreakFast;
      // this.foodItemLunch = this.food.foodItemLunch;
      // this.foodItemSnacks = this.food.foodItemSnacks;
    } else {
      this.food.tommorowFood();
      // this.foodItemBreakFast = this.food.foodItemBreakFast;
      // this.foodItemLunch = this.food.foodItemLunch;
      // this.foodItemSnacks = this.food.foodItemSnacks;
    }
  }
}
