import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthService, private http: HttpClient) {}

  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  credentials = {
    email: this.email,
    password: this.password,
  };

  loginForm = new FormGroup(this.credentials);

  async authenticate() {
    

   const f = this.auth.login(this.loginForm.value.email || '', this.loginForm.value.password || '').subscribe(
    (response) => {console.log(response);
    ; },
    (error) => { console.log(error); });;
   console.log(f);
   

  }
}
