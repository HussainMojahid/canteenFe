import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  backArrow = faArrowLeft;
  AlertType = 'success';
  showAlert: boolean = false;
  alertMsg = 'Please Wait! Under Process';

  constructor(public auth: AuthService, public userService: UserService,private route : Router) {}
  ngOnInit(): void {}

  password = new FormControl('', [Validators.required]);
  currentPassword = new FormControl('', [Validators.required]);
  passwordConfirmation = new FormControl('', [
    Validators.required,
    this.matchValues('password'),
  ]);

  changePasswordForm = new FormGroup({
    password: this.password,
    currentPassword: this.currentPassword,
    passwordConfirmation: this.passwordConfirmation,
  });

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value
        ? null
        : { notMatching: true };
    };
  }

  changePassword() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          'text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
        cancelButton:
          'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
      },
      buttonsStyling: false,
    });
    if(this.changePasswordForm){
      this.userService
      .changePasswordRequest(this.changePasswordForm)
      .subscribe((res) => {
        console.log('response', res);
      });
      swalWithBootstrapButtons
        .fire({
          title: 'Added !',
          showCancelButton: true,
          imageWidth: 400,
          confirmButtonText: 'Done!',
          cancelButtonText: 'Cancel!',
          reverseButtons: false,
          imageHeight: 200,
        })
        .then((res)=>{
          if(res.isConfirmed){
            this.route.navigateByUrl('/')
          }
        })
        // .then((result) => {
        //   if (result.isConfirmed) {
        //     this.route.navigateByUrl('/');
        //   } else if (result.dismiss === Swal.DismissReason.cancel) {
        //     this.changePasswordForm.reset();
        //   }
        // });
    }
    // this.AlertType = 'alert';
    // this.showAlert = true;
   // console.log('chnage password called');
    
  }
}
