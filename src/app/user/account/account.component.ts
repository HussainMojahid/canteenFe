import { Component, OnInit } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  
  userIcon = faCircleUser;
  username = JSON.parse(localStorage.getItem('_username_canteen_app') || '');
  modal = false
constructor(public auth: AuthService){}
  ngOnInit(): void {
  }

  confirmModal() {
    this.modal = !this.modal;
  }
  logout() {
    this.auth.logout();
    this.auth.isAuthenticated();
  }
  confirm(){
    this.modal = !this.modal;
  }

  
}
