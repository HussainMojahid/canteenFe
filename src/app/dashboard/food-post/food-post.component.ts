import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import IFoodItem from 'src/app/models/food.model';

@Component({
  selector: 'app-food-post',
  templateUrl: './food-post.component.html',
  styleUrls: ['./food-post.component.css'],
})
export class FoodPostComponent implements OnInit {
  routeState: any;
  food1!: IFoodItem;
  date1: Date = new Date();
  fooditem: any[] = this.food.fooditem;

  constructor(
    public auth: AuthService,
    public food: FoodService,
    public activatedroute: ActivatedRoute,
    public router: Router
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;

      console.log(this.routeState);
    }

    if (this.routeState.selectedDay) {
      this.date1 = new Date();
      console.log(this.date1);
    } else {
      var day = new Date();
      var nextDay = new Date(day);
      nextDay.setDate(day.getDate() + 1);
      this.date1 = nextDay;
      console.log(this.date1);
    }
  }

  ngOnInit(): void {}

  backArrow = faArrowLeft;

  foodname = new FormControl([''], [Validators.required, Validators.min(10)]);
  date = new FormControl(this.food.formatDate(this.date1), [
    Validators.required,
  ]);
  price = new FormControl('', [Validators.required]);

  foodForm = new FormGroup({
    foodname: this.foodname,
    date: this.date,
    price: this.price,
  });

  foodItems: IFoodItem = {
    FoodName: this.foodForm.value.foodname!,
    price: this.foodForm.value.price!,
    date: this.foodForm.value.date!,
  };

  saveFood() {
    this.food.postFood(this.foodItems).subscribe((response: IFoodItem) => {
      console.log(response);
    });
  }

  selectedCity: any;
  selectedCityIds: string[] | undefined;

  selectedCityId: number | undefined;
  selectedUserIds: string[] | undefined;
}
