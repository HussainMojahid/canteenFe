import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { faArrowLeft,faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  backArrow = faArrowLeft;
  deletebutton = faTrash;
  userName : string  = JSON.parse(localStorage.getItem('_username_canteen_app') || '');
  email = JSON.parse(localStorage.getItem('_email_canteen_app') || '');
   
  constructor(public auth: AuthService,private userService: UserService){}
  url='';
   onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  public delete(){
    this.url='';
  }
}
