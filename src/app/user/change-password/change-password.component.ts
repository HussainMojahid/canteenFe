import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
// export class ChangePasswordComponent {
//   backArrow = faArrowLeft;
//   eye = faEye;
//   eyeSlash = faEyeSlash;
//   circleEx = faCircleExclamation;
//   visible:boolean = false;
//   changetype:boolean = true;
//   modal = false;
//   show: boolean=false;
//   passwordHide(){
//     this.show=!this.show
//   }
//   confirmModal() {
//     this.modal = !this.modal;
//   }

//   viewpass(){
//     this.visible = !this.visible;
//     this.changetype = !this.changetype;
//   }
  
//   constructor(public auth: AuthService) {}
// }
export class ChangePasswordComponent {
  backArrow = faArrowLeft;
  eye = faEye;
  eyeSlash = faEyeSlash;
  modal = false;
  circleEx = faCircleExclamation;
  visibleFields: boolean[] = [false, false, false]; // [currentPassword, newPassword, confirmPassword]
  confirmModal() {
        this.modal = !this.modal;
      }
    
  viewpass(index: number) {
    this.visibleFields[index] = !this.visibleFields[index];
  }
  



  constructor(public auth: AuthService,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService) {}
    isModalOpen = false;
    openModal() {
      this.isModalOpen = true;
    }
    
    closeModal() {
      this.isModalOpen = false;
    }
}
