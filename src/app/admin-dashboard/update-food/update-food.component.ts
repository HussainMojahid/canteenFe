import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { FoodInventoryServiceService } from 'src/app/services/food-inventory-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css'],
})
export class UpdateFoodComponent implements OnInit {
  constructor(
    public foodInventory: FoodInventoryServiceService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {}
  id: number = -1;
  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.id = p['id'];
      this.foodInventory.getFoodById(p['id']).subscribe((res: any) => {
        console.log(res);
        this.setValue(res);
      });
    });
  }

  AlertType = 'success';
  showAlert: boolean = false;
  alertMsg = 'Please Wait! Under Process';
  backArrow = faArrowLeft;

  FoodName = new FormControl('', [Validators.required, Validators.min(3)]);
  Price = new FormControl('', [Validators.required]);
  ImageUrl = new FormControl('', [Validators.required]);

  editFoodForm = new FormGroup({
    FoodName: this.FoodName,
    Price: this.Price,
    ImageUrl: this.ImageUrl,
  });

  setValue(res: any) {
    console.log(res);

    this.FoodName.setValue(res.FoodName),
      this.Price.setValue(res.Price),
      this.ImageUrl.setValue(res.ImgUrl);
  }
  updateFood() {
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
        title: 'Are you sure want to Update?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Update it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.foodInventory.updateFood(this.editFoodForm, this.id).subscribe({
            next: () => {
              Swal.fire('Updated!', 'Food Updated.', 'success');
              this.router.navigateByUrl('/foodInventory');
            },
          });
        }
      });
  }
}
