import { Component, Output, EventEmitter } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';  


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  backArrow = faArrowLeft;
  email = new FormControl('', [Validators.required]);
  @Output() modalClosed = new EventEmitter<boolean>();
  forgotpasswordForm = new FormGroup({
  email:this.email
  });
  close() {
    this.modalClosed.emit(true);
  }



 
  constructor(public auth : AuthService, private router: Router,private toastr: ToastrService){}
// reset(){
//   this.auth.forgotPassword(this.forgotpasswordForm).subscribe(
//     {next(value) {
 
//         console.log(value)
//     },error(err) {
//         console.log(err)
//     },
//   }
//   );
// }
reset() {
  this.auth.forgotPassword(this.forgotpasswordForm).subscribe(
    (response: any) => {
      if (response && response.ok === true) {
        this.toastr.success('Reset link successfully sent');
      }
    },
    (error: any) => {
      console.log(error);
    }
  );
}
// 
// reset() {
//   this.auth.forgotPassword(this.forgotpasswordForm).subscribe(
//     (value: any) => {
//       if (value && value.ok === true) {
//         this.toastr.success('Reset link successfully sent');
//       } else {
//         this.toastr.error('Failed to send reset link');
//       }
//     },
//     (error) => {
//       this.toastr.error('Error sending reset link');
//       console.log(error);
//     }
//   );
// }

}
