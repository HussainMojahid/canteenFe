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

  username = new FormControl('', [Validators.required, Validators.min(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirm_password = new FormControl('', [
    Validators.required,
    this.matchValues('password'),
  ]);
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
}
