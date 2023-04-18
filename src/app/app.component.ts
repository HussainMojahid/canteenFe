import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ModalService } from './services/modal.service';
import { Router } from '@angular/router';
import IUser from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  showFooter: boolean = false;
  user: IUser | undefined;

  constructor(public  auth: AuthService,public modal : ModalService, private router: Router){
    this.modal.toggleModal('auth');
  }
  ngOnInit(): void {
    this.auth.isAuthenticated();
  }
  title = 'canteen-fe';
}