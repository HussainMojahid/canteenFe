import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.css'],
})
export class DashboardModalComponent implements OnInit {
  foodItemBreakFast: any[] = [
    {
      id: 1,
      name: 'poha',
      imageUrl:
        'https://www.shutterstock.com/image-photo/indian-breakfast-dish-poha-260nw-765020587.jpg',
    },
    {
      id: 1,
      name: 'Samosa',
      imageUrl: 'https://thumbs.dreamstime.com/b/samosa-24578861.jpg',
    },
  ];

  foodItemLunch: any[] = [
    {
      id: 1,
      name: 'poha',
      imageUrl:
        'https://www.shutterstock.com/image-photo/indian-breakfast-dish-poha-260nw-765020587.jpg',
    },
    {
      id: 1,
      name: 'Samosa',
      imageUrl: 'https://thumbs.dreamstime.com/b/samosa-24578861.jpg',
    },
  ];

  foodItemSnacks: any[] = [
    {
      id: 1,
      name: 'poha',
      imageUrl:
        'https://www.shutterstock.com/image-photo/indian-breakfast-dish-poha-260nw-765020587.jpg',
    },
    {
      id: 1,
      name: 'Samosa',
      imageUrl: 'https://thumbs.dreamstime.com/b/samosa-24578861.jpg',
    },
  ];
  constructor(public sidebar : SidebarService,public food :FoodService) {
    food.getFood().subscribe(
      {
        next(value) {
      
        value.forEach((element: any) => {
          
          
        });
             
        },
      }
    );
    
  }
  ngOnInit(): void {
    // const foodItems : IFoodItem[] = this.card.getFood().subscribe()
  }
}
