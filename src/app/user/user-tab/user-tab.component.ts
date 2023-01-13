import { Component, Input } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent {

  username = localStorage.getItem('_username_canteen_app');
  email = localStorage.getItem('_email_canteen_app');

constructor(public sidebar: SidebarService){

}

toggle(){
  this.sidebar.toggleUserTab()
}

}
