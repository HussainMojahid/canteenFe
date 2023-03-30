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
  organization: string = 'Newvision Software';
  url: string = '';

  ngOnInit(): void {
    let localUrl = 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';
    let temp = localStorage.getItem('profile_img');
    if ( temp ) {
      this.url = JSON.parse(temp);
    } else {
      this.url = localUrl;      
    }
  }
   
  constructor(public auth: AuthService,private userService: UserService){
        
  }

   onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;  
        
        localStorage.setItem('profile_img', JSON.stringify(this.url));
      }
    }
  }
  public delete(){
    this.url='';
  }
}
