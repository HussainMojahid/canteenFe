import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  backArrow = faArrowLeft

  AlertType = 'success';
  showAlert: boolean = false;
  alertMsg = 'Please Wait! Under Process';
  OrgList :any[] = [{
    id : "1",
    orgName : "GTS"
  },{
    id : "2",
    orgName : "CoreCard"
  },{
    id : "3",
    orgName : "NewVision"
  }]
  constructor(public auth: AuthService, private http: HttpClient) {}

  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required,Validators.email]);
 
  organization = new FormControl('', [Validators.required]);
  EmployeeId = new FormControl('', [Validators.required]);

  registerForm = new FormGroup({
    username: this.username,
    email: this.email,
    
    organization: this.organization,
    EmployeeId: this.EmployeeId,
    
  });

  update() {
    this.AlertType = 'alert';
    this.showAlert = true;

    this.auth
      .update(this.registerForm)

      .subscribe({
        next: () => {
          this.AlertType = 'success';
          this.showAlert = true;
          this.alertMsg = 'Account Created';
          this.auth.isAuthenticated();
        },

        error: (e) => {
          this.AlertType = 'error';
          this.showAlert = true;
          this.alertMsg = e.error.error.message;
        }
      });

    return;
  }
  

}
