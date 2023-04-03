import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  userIcon = faUserCircle;
  username = JSON.parse(localStorage.getItem('_username_canteen_app') || '');
  constructor(public sidebar: SidebarService ) {}
  toggleHam($event: Event) {
    this.sidebar.toggleSidebar();
    
    $event.preventDefault();
  }
}
