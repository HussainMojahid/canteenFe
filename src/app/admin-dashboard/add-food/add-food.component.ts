import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

import { FoodInventoryServiceService } from 'src/app/services/food-inventory-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css'],
})
export class AddFoodComponent {
  constructor(
    public foodInventory: FoodInventoryServiceService,
    private http: HttpClient,
    private router: Router,
    public auth: AuthService
  ) {}

  AlertType = 'success';
  showAlert: boolean = false;
  alertMsg = 'Please Wait! Under Process';
  backArrow = faArrowLeft;

  FoodName = new FormControl('', [Validators.required, Validators.min(3)]);
  Price = new FormControl('', [Validators.required]);
  ImageUrl = new FormControl('', [Validators.required]);

  addFoodForm = new FormGroup({
    FoodName: this.FoodName,
    Price: this.Price,
    ImageUrl: this.ImageUrl,
  });

  addFood() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          'text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
        cancelButton:
          'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
      },
      buttonsStyling: false,
    });

    this.foodInventory.addFood(this.addFoodForm).subscribe({
      next: () => {
        swalWithBootstrapButtons
          .fire({
            title: 'Added !',
            showCancelButton: true,
            text: this.FoodName.value ? this.FoodName.value : '',
            imageUrl: this.ImageUrl.value ? this.ImageUrl.value : '',
            imageWidth: 400,
            confirmButtonText: 'Done!',
            cancelButtonText: 'Add More!',
            reverseButtons: false,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('/foodInventory');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              this.addFoodForm.reset();
            }
          });
      },
    });
  }
}
