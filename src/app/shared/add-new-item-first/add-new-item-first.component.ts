import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-new-item-first',
  templateUrl: './add-new-item-first.component.html',
  styleUrls: ['./add-new-item-first.component.css']
})
export class AddNewItemFirstComponent {
  backArrow = faArrowLeft;
  rupeeSign = faIndianRupeeSign;

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private userService: UserService
  ) {}

}
