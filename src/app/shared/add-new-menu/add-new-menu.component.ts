import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-new-menu',
  templateUrl: './add-new-menu.component.html',
  styleUrls: ['./add-new-menu.component.css']
})
export class AddNewMenuComponent {

  backArrow = faArrowLeft;
  calArrow = faCalendarDays;
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
