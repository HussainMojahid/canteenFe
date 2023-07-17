import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-day-toggle-button',
  templateUrl: './day-toggle-button.component.html',
  styleUrls: ['./day-toggle-button.component.css'],
})
export class DayToggleButtonComponent {
  toggleToday = true;
  toggleTomorrow = false;
  left = faChevronLeft;
  right = faChevronRight;
  isTomorrowActive = false;
  isTodayActive = false;
  isDateActive: any;
  Date: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());
  @Output() updateFoodByDateEvent = new EventEmitter<Date>();
  constructor(public foodService: FoodService) {}

  toggleDay(tabname: string) {
    if (tabname === 'Today') {
      this.Date.next(new Date());
      this.isTodayActive = !this.isTodayActive;
      this.updateFoodByDateEvent.emit(new Date());
    }
    if (tabname === 'Tomorrow') {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.Date.next(tomorrow);
      this.isTomorrowActive = !this.isTomorrowActive;
      console.log("it works");
      
      this.updateFoodByDateEvent.emit(tomorrow);
    }
  }
}
