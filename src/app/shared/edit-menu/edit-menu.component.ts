import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';






@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent {
  backArrow = faArrowLeft;
  show: boolean=true;
  passwordHide(){
    this.show=!this.show
  }
  

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private userService: UserService
  ) {}

  magbutton = faMagnifyingGlass;
}





