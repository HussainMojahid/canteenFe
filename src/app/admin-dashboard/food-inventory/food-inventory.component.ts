import { Component, OnInit } from '@angular/core';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FoodInventoryServiceService } from 'src/app/services/food-inventory-service.service';

@Component({
  selector: 'app-food-inventory',
  templateUrl: './food-inventory.component.html',
  styleUrls: ['./food-inventory.component.css'],
})
export class FoodInventoryComponent implements OnInit {
  plusbutton = faPlus;
  deletebutton = faTrash;
  editbutton = faEdit;

  allFood: any[] = [];

  constructor(private foodInvetory: FoodInventoryServiceService) {}
  ngOnInit(): void {
    this.getFood();
  }

  getFood() {
    this.foodInvetory.getAllFood().subscribe((res: any) => {
      this.allFood = res;
      console.log(this.allFood);
    });
  }
}
