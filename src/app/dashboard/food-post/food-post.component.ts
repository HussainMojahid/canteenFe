import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { FoodInventoryServiceService } from 'src/app/services/food-inventory-service.service';
import { FoodService } from 'src/app/services/food.service';
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
  
  
  
  foodList = new FormControl([], [Validators.required]);
  date = new FormControl(this.foodservice.formatDate(this.date1), [
    Validators.required,
  ]);

  
  

  foodForm = new FormGroup({
    foodList: this.foodList,
    date: this.date,
  });
  ngOnInit(): void {
    this.date.setValue(this.foodservice.formatDate(this.date1));
  }

  saveFood() {


    if (this.foodForm.valid) {
      this.foodForm.value.foodList?.forEach((item) => {
        this.foodservice
          .postFood({
            Date: this.foodForm.value.date,
            food_inventory: item,
            food_catagory: this.routeState.category,
          })
          .subscribe({
            next:(value) => {
              this.showSwal()
              
            },
            
          });
      });

    }
  }

  showSwal(){
    let flag = false;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          'text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
        cancelButton:
          'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
    .fire({
      title: 'Added !',
      showCancelButton: true,
      imageWidth: 400,
      confirmButtonText: 'Done!',
      cancelButtonText: 'Add More!',
      reverseButtons: false,
      imageHeight: 200,
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.foodForm.get('foodList')?.reset();
      }
    });
  }
}
