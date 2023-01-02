import { Component } from '@angular/core';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public  auth: AuthService){

  }

  title = 'canteen-fe';
}
