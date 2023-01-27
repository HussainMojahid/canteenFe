import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-post',
  templateUrl: './food-post.component.html',
  styleUrls: ['./food-post.component.css'],
})
export class FoodPostComponent {
  constructor(public auth: AuthService, public food: FoodService) {}

  @Input() category = 'lunch';
  backArrow = faArrowLeft;

  foodname = new FormControl([''], [Validators.required, Validators.min(3)]);
  date = new FormControl(new Date(`${new Date().getDay}` ), [Validators.required]);
  price = new FormControl('', [Validators.required]);

  foodForm = new FormGroup({
    foodname: this.foodname,
    date: this.date,
    price: this.price,
  });
  addFood() {
    console.log(this.foodForm.value.foodname);
    console.log(this.foodForm.value.date);
    console.log(this.foodForm.value.price);
  }

  cities: any[] = this.food.foodItemBreakFast;

  selectedCity: any;
  selectedCityIds: string[] | undefined;
  // selectedCityName = 'Vilnius';
  selectedCityId: number | undefined;
  selectedUserIds: string[] | undefined;
}
