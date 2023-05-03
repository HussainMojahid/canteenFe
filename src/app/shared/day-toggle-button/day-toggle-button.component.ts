import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
@Component({
  selector: 'app-day-toggle-button',
  templateUrl: './day-toggle-button.component.html',
  styleUrls: ['./day-toggle-button.component.css'],
})
export class DayToggleButtonComponent {
  
  toggleToday= true;
  toggleTomorrow=false;

  constructor(public foodService: FoodService) {}
  toggleDay(tabname:string) {
    // this.foodService.toggleDay();
    if(tabname==="Today"){
      this.toggleToday=true;
      this.toggleTomorrow=false;
      this.foodService.todayFood();
    }
    if(tabname==="Tomorrow"){
      this.toggleToday=false;
      this.toggleTomorrow=true;
      this.foodService.tommorowFood();
    }
  }
}
