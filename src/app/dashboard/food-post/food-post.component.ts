import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';
import { Router } from '@angular/router';
import { FoodInventoryServiceService } from 'src/app/services/food-inventory-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-food-post',
  templateUrl: './food-post.component.html',
  styleUrls: ['./food-post.component.css'],
})
export class FoodPostComponent implements OnInit {
  routeState: any;
  date1: Date = new Date();
  AlertType = 'success';
  showAlert: boolean = false;
  alertMsg = 'Please Wait! Under Process';
  backArrow = faArrowLeft;
  selectedFoods: string[] | undefined;
  foodItemList: any[] = this.foodservice.fooditem;

  constructor(
    public router: Router,
    public foodinventory: FoodInventoryServiceService,
    private foodservice: FoodService,
    public auth: AuthService
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;
      console.log(this.routeState.category);
    }

    if (this.routeState.selectedDay) {
      this.date1 = new Date();
    } else {
      var day = new Date();
      var nextDay = new Date(day);
      nextDay.setDate(day.getDate() + 1);
      this.date1 = nextDay;
    }
  }

  // //Form Controls
  foodList = new FormControl([], [Validators.required, Validators.min(10)]);
  date = new FormControl(this.foodservice.formatDate(this.date1), [
    Validators.required,
  ]);

  // //Form Group
  foodForm = new FormGroup({
    foodList: this.foodList,
    date: this.date,
  });
  ngOnInit(): void {}

  saveFood() {
    if (this.foodForm.valid) {
      this.foodForm.value.foodList?.forEach((item) => {
        this.foodservice.postFood({
          Date: this.foodForm.value.date,
          food_inventory: item,
          food_catagory: this.routeState.category,
        }).subscribe()
      });
    }
  }
}
