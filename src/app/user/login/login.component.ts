import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { ToastrService } from 'ngx-toastr';  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  AlertType = 'alert';
  showAlert: boolean = false;
  alertMsg = 'Please Wait! Under Process';
  modal = false;
  show: boolean = false;
  circleEx = faCircleExclamation;
  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  visibleFields: boolean[] = [false, false, false]; // [currentPassword, newPassword, confirmPassword]
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(18),
    this.namePatternValidator(),
  ]);
  // password = new FormControl('', [Validators.required]);
  
  password = new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]);
  credentials = {
    email: this.email,
    password: this.password,
  };
 
  loginForm = new FormGroup(this.credentials);

  viewpass(index: number) {
    this.visibleFields[index] = !this.visibleFields[index];
  }

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let token: any;
    let email: any;
    token = localStorage.getItem('_token_canteen_app');
    email = localStorage.getItem('_email_canteen_app');
    let currUser = localStorage.getItem('_username_canteen_app');

    if (
      token === localStorage.getItem('_token_canteen_app') ||
      email === localStorage.getItem('_email_canteen_app') ||
      currUser === localStorage.getItem('_username_canteen_app')
    ) {
      let user: IUser = currUser && JSON.parse(currUser) && JSON.parse(email) && JSON.parse(token);
      this.auth.setCurrentUser(user);
    } else if (token === null && currUser === null && email === null) {
      return;
    }
  }

  authenticate() {
    this.AlertType = 'alert';
    this.showAlert = true;
    this.auth
      .login(this.loginForm.value.email || '', this.loginForm.value.password || '')
      .subscribe({
        next: (v) => {
          this.AlertType = 'success';
          this.showAlert = true;
          this.alertMsg = 'LogIn Successful';
          this.auth.isAuthenticated();
          this.router.navigateByUrl('/');
        },
        error: (e) => {
          this.AlertType = 'error';
          this.showAlert = true;
          // this.alertMsg = e.error.error.message;
          
          // this.toastr.error; 
        },
      });

    return;
  }

  passwordHide() {
    this.show = !this.show;
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  namePatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const name: string = control.value;

      if (/^[a-zA-Z0-9_]+$/.test(name) && name.length >= 3 && name.length <= 18) {
        return null; // Valid name
      } else {
        return { invalidName: true }; // Invalid name
      }
    };
  }
  
}







