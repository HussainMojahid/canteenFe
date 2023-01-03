import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  AlertType = 'success';
  showAlert : boolean = false;
  alertMsg = 'Please Wait! Under Process'

  constructor(private auth: AuthService, private http: HttpClient){

  }

  username =  new FormControl('', [Validators.required,Validators.min(3)]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirm_password = new FormControl('', [Validators.required]);  
  organization = new FormControl('', [Validators.required]);
  EmployeeId = new FormControl('', [Validators.required]);



  registerForm = new FormGroup({
    name: this.username,
    email: this.email,
    password: this.password,
    organization : this.organization,
    EmployeeId : this.EmployeeId,
    confirm_password: this.confirm_password,
  })


  register(){


    
  }


}
