import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  AlertType = 'success';
  showAlert: boolean = false;
  alertMsg = 'Please Wait! Under Process';
  OrgList: any[] = [
    {
      id: '1',
      orgName: 'GTS',
    },
    {
      id: '2',
      orgName: 'CoreCard',
    },
    {
      id: '3',
      orgName: 'NewVision',
    },
  ];
  constructor(private auth: AuthService, private http: HttpClient,private router: Router,private toastr: ToastrService) {}
  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
  // 
  EmployeeId = new FormControl('', [Validators.required]);
// username = new FormControl('', [Validators.required, Validators.minLength(3)]);
username = new FormControl('', [
  Validators.required,
  Validators.minLength(3),
  Validators.maxLength(18),
  this.namePatternValidator(),
]);
email = new FormControl('', [
  Validators.required,
  Validators.email,
  this.emailDomainValidator('newvision-software.com'),
]);
password = new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]);
confirm_password = new FormControl('', [
  Validators.required,
  this.matchValues('password'),
]);
visibleFields: boolean[] = [false, false, false];

registerForm = new FormGroup({
  EmployeeId: this.EmployeeId, // Update the name to "EmployeeId"
  username: this.username, // Update the name to "username"
  email: this.email, // Update the name to "email"
  password: this.password,
  confirm_password: this.confirm_password,
});

  registration() {
    this.AlertType = 'alert';
    this.showAlert = true;

    this.auth
      .registration(this.registerForm)

      .subscribe({
        next: () => {
          this.AlertType = 'success';
          this.showAlert = true;
          this.alertMsg = 'Account Created';
          this.auth.isAuthenticated();
          this.router.navigateByUrl('/')
          this.toastr.success("Account Created Successfully")
        },

        error: (e) => {
          this.AlertType = 'error';
          this.showAlert = true;
          this.alertMsg = e.error.error.message;
        },
      });

    return;
  }

  viewpass(index: number) {
    this.visibleFields[index] = !this.visibleFields[index];
  }

  checkFormValidity(): boolean {
    return this.registerForm.valid && this.registerForm.dirty;
  }
  
  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(matchTo)?.value
        ? null
        : { notMatching: true };
    };
  }
  emailDomainValidator(allowedDomain: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email: string = control.value;
      const emailParts: string[] = email.split('@');
      const domain: string = emailParts[emailParts.length - 1];

      if (domain.toLowerCase() === allowedDomain.toLowerCase()) {
        return null; // Domain is valid
      } else {
        return { invalidDomain: true }; // Invalid domain
      }
    };
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
