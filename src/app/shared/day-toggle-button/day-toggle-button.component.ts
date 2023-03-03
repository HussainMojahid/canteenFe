import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-day-toggle-button',
  templateUrl: './day-toggle-button.component.html',
  styleUrls: ['./day-toggle-button.component.css'],
})
export class DayToggleButtonComponent {
  constructor(public foodService: FoodService) {}

  toggleDay() {
    this.foodService.toggleDay();
  }
}
