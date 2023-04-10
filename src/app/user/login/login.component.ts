import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  AlertType = 'alert';
  showAlert: boolean = false;
  alertMsg = 'Please Wait! Under Process';

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  credentials = {
    email: this.email,
    password: this.password,
  };

  loginForm = new FormGroup(this.credentials);

  authenticate() {
    this.AlertType = 'alert';
    this.showAlert = true;
    this.auth
      .login(
        this.loginForm.value.email || '',
        this.loginForm.value.password || ''
      )
      .subscribe({
        next: (v) => {
          this.AlertType = 'success';
          this.showAlert = true;
          this.alertMsg = 'LogIn Successful';
          this.auth.isAuthenticated();
        },
        error: (e) => {
          this.AlertType = 'error';
          this.showAlert = true;
          this.alertMsg = e.error.error.message;
        },
      });
    return;
  }
}
