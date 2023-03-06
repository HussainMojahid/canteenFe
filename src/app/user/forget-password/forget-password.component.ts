import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  backArrow = faArrowLeft;
  constructor(public auth : AuthService,public userService : UserService,public route:Router){}
  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  forgotForm = new FormGroup({
   email: this.email,
  });

  forgotPassword(){
      this.userService.sendResetLink(this.forgotForm).subscribe({
        next:(val)=>{
          //console.log("rrrrrrrrrrrrrrrrrrr");
          console.log(val);
          if(val.ok===true){
            this.route.navigateByUrl('/resetPassword')
          }
          
          
        },
        error:error =>{
          console.log(error);
          
        }
      })
  }

}
