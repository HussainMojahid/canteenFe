


import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-new-item-second',
  templateUrl: './add-new-item-second.component.html',
  styleUrls: ['./add-new-item-second.component.css']
})
export class AddNewItemSecondComponent  {

  backArrow = faArrowLeft;
  rupeeSign = faIndianRupeeSign;



  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private userService: UserService
  ) {}

}

