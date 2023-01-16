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
  foodItemBreakFast: any[] = [
    // {
    //   id: 1,
    //   name: 'poha',
    //   imageUrl:
    //     'https://www.shutterstock.com/image-photo/indian-breakfast-dish-poha-260nw-765020587.jpg',
    // },
    // {
    //   id: 1,
    //   name: 'Samosa',
    //   imageUrl: 'https://thumbs.dreamstime.com/b/samosa-24578861.jpg',
    // },
  ];
  foodItemLunch: any[] = [
    // {
    //   id: 1,
    //   name: 'poha',
    //   imageUrl:
    //     'https://www.shutterstock.com/image-photo/indian-breakfast-dish-poha-260nw-765020587.jpg',
    // },
    // {
    //   id: 1,
    //   name: 'Samosa',
    //   imageUrl: 'https://thumbs.dreamstime.com/b/samosa-24578861.jpg',
    // },
  ];

  foodItemSnacks: any[] = [];
  constructor(public sidebar: SidebarService, public food: FoodService) {}
  ngOnInit(): void {
    if(this.food.selectedDay){
      this.food.todayFood()
      this.foodItemBreakFast = this.food.foodItemBreakFast;
      this.foodItemLunch = this.food.foodItemLunch;
      this.foodItemSnacks = this.food.foodItemSnacks;
    }else{

      this.food.tommorowFood()
      this.foodItemBreakFast = this.food.foodItemBreakFast;
      this.foodItemLunch = this.food.foodItemLunch;
      this.foodItemSnacks = this.food.foodItemSnacks;
    }

    }

}
