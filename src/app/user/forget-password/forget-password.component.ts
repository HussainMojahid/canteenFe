import { Component, Output, EventEmitter } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxOtpInputConfig } from 'ngx-otp-input/public-api';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  backArrow = faArrowLeft;
  email = new FormControl('', [Validators.required]);
  @Output() modalClosed = new EventEmitter<boolean>();

  close() {
    this.modalClosed.emit(true);
  }



 
  constructor(public auth : AuthService, private router: Router){}

}
