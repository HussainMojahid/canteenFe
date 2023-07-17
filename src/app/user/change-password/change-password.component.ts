// import { Component } from '@angular/core';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { AuthService } from 'src/app/services/auth.service';
// import { faEye } from '@fortawesome/free-solid-svg-icons';
// import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// @Component({
//   selector: 'app-change-password',
//   templateUrl: './change-password.component.html',
//   styleUrls: ['./change-password.component.css'],
// })
// // export class ChangePasswordComponent {
// //   backArrow = faArrowLeft;
// //   eye = faEye;
// //   eyeSlash = faEyeSlash;
// //   circleEx = faCircleExclamation;
// //   visible:boolean = false;
// //   changetype:boolean = true;
// //   modal = false;
// //   show: boolean=false;
// //   passwordHide(){
// //     this.show=!this.show
// //   }
// //   confirmModal() {
// //     this.modal = !this.modal;
// //   }

// //   viewpass(){
// //     this.visible = !this.visible;
// //     this.changetype = !this.changetype;
// //   }
  
// //   constructor(public auth: AuthService) {}
// // }
// export class ChangePasswordComponent {
//   backArrow = faArrowLeft;
//   eye = faEye;
//   eyeSlash = faEyeSlash;
//   modal = false;
//   circleEx = faCircleExclamation;
//   visibleFields: boolean[] = [false, false, false]; // [currentPassword, newPassword, confirmPassword]
//   confirmModal() {
//         this.modal = !this.modal;
//       }
    
//   viewpass(index: number) {
//     this.visibleFields[index] = !this.visibleFields[index];
//   }
  



//   constructor(public auth: AuthService,
//     private http: HttpClient,
//     private router: Router,
//     private toastr: ToastrService) {}
//     isModalOpen = false;
//     openModal() {
//       this.isModalOpen = true;
//     }
    
//     closeModal() {
//       this.isModalOpen = false;
//     }
// }




import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  [x: string]: any;
  backArrow = faArrowLeft;
  eye = faEye;
  eyeSlash = faEyeSlash;
  modal = false;
  circleEx = faCircleExclamation;
  visibleFields: boolean[] = [false, false, false]; // [currentPassword, newPassword, confirmPassword]
  // password = new FormControl('', [Validators.required]);
  confirmPassword= new FormControl('', Validators.required);
  currentPassword = new FormControl('', [Validators.required]);
  newPassword= new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
  ]);
  passwordConfirmation = new FormControl('', [
    Validators.required,
    this.matchValues('password'),
  ]);
  changePasswordForm: FormGroup= new FormGroup({
    currentPassword:this.currentPassword,
    newPassword: this.newPassword,
    confirmPassword: this.confirmPassword,
  });;


  confirmModal() {
    this.modal = !this.modal;
  }

  viewpass(index: number) {
    this.visibleFields[index] = !this.visibleFields[index];
  }

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {
  
  }
  isModalOpen = false;
      openModal() {
        this.isModalOpen = true;
      }
      
      closeModal() {
        this.isModalOpen = false;
      }
      ngOnInit(): void {}

    
      // changePasswordForm = new FormGroup({
      //   password: this.password,
      //   currentPassword: this.currentPassword,
      //   passwordConfirmation: this.passwordConfirmation,
      // });
    
      matchValues(matchTo: string): ValidatorFn {
        return (control: AbstractControl) => {
          return control.value === control.parent?.get(matchTo)?.value
            ? null
            : { notMatching: true };
        };
      }
    
      changePassword() {
        console.log("works");
        console.log(this.changePasswordForm.value.currentPassword);
        
      
          this.userService
            .changePasswordRequest(this.changePasswordForm)
            .subscribe({
              next: (val: any) => {
              console.log(val);
              
  
              },
            });
        
      }

      // changePassword() {
      //   this.userService.changePasswordRequest(this.changePasswordForm)
      //     .subscribe(() => {
      //       // Password changed successfully
      //       // Perform any additional actions or show a success message
      //     }, (error) => {
      //       // Handle the error case, show an error message, etc.
      //     });
      // }
      
      showSwal() {
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
            title: 'Are you sure want to change?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Update password!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              this['route'].navigateByUrl('/');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            }
          });
      }
}
