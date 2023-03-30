import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  allBooking: any[] = [];
  constructor(
    private auth: AuthService,
    private router: Router,
    private foodService: FoodService
  ) {
    this.Date.setValue(this.foodService.formatDate(this.date1));
  }
  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe((val) => {
      this.auth.user$.next(val);
    });
    this.getAllBooking();
  }
  postBooking(bookingForm: any) {
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
        title: 'Are you sure want to Book?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Book it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Booked!', 'YOur Food is waiting', 'success');

          this.auth.emgBooking(bookingForm).subscribe((val) => {});
          window.location.reload()
        }
      });
  }

  getAllBooking() {
    this.auth.getListOfBooking().subscribe((val: any) => {
      this.allBooking = val.data;
    });
  }

  date1 = new Date();

  Time = new FormControl([Validators.required]);
  Date = new FormControl(this.foodService.formatDate(this.date1), [
    Validators.required,
  ]);
  bookingForm = new FormGroup({
    Date: this.Date,
    Time: this.Time,
  });
}
