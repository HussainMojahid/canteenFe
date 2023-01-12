import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IRegister from 'src/app/models/register.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  AlertType = 'success';
  showAlert: boolean = false;
  alertMsg = 'Please Wait! Under Process';

  constructor(private auth: AuthService, private http: HttpClient) {}

  username = new FormControl('', [Validators.required, Validators.min(3)]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirm_password = new FormControl('', [Validators.required]);
  organization = new FormControl('', [Validators.required]);
  EmployeeId = new FormControl('', [Validators.required]);

  registerForm = new FormGroup({
    username: this.username,
    email: this.email,
    password: this.password,
    organization: this.organization,
    EmployeeId: this.EmployeeId,
    confirm_password: this.confirm_password,
  });

  registeration() {
    this.AlertType = 'alert';
    this.showAlert = true;

    this.auth
      .registration(this.registerForm)

      .subscribe({
        next: () => {
          this.AlertType = 'success';
          this.showAlert = true;
          this.alertMsg = 'Account Created';
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
