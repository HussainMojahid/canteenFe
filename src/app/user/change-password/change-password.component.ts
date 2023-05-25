import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  backArrow = faArrowLeft;
  eye = faEye;
  eyeSlash = faEyeSlash;
  circleEx = faCircleExclamation;
  visible:boolean = true;
  changetype:boolean = true;
  modal = false;
  show: boolean=false;
  passwordHide(){
    this.show=!this.show
  }
  confirmModal() {
    this.modal = !this.modal;
  }

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  
  constructor(public auth: AuthService) {}
}
