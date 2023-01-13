import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent {

  userName : string  = JSON.parse(localStorage.getItem('_username_canteen_app') || '');

}
