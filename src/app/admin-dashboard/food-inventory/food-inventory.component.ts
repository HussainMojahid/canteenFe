import { Component, OnInit } from '@angular/core';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { FoodInventoryServiceService } from 'src/app/services/food-inventory-service.service';
import Swal from 'sweetalert2';
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
    });
  }

  onSearch($event: Event) {
    this.allFood = [];
    if (($event!.target as HTMLInputElement).value) {
      this.foodInvetory
        .getAllFood()
        .pipe(
          map((e) =>
            e.filter((e: any) =>
              e.attributes.FoodName.toLowerCase().includes(
                ($event!.target as HTMLInputElement).value.toLowerCase()
              )
            )
          )
        )
        .subscribe((res: any) => {
          this.allFood = res;
        });
    }
    if (!($event.target as HTMLInputElement).value) {
      this.getFood();
    }
  }

  deleteFood(id: number) {
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
        title: 'Are you sure want to delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Food deleted.', 'success');

          this.foodInvetory.deleteFood(id).subscribe({
            next: () => {
              this.allFood = [];
              this.getFood();
            },
          });
        }
      });
  }
}
