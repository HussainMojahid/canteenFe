import { Component } from '@angular/core';
import {
  faHamburger,
  faMobileScreenButton,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../services/sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  userIcon = faUserCircle;

  constructor(public sidebar: SidebarService) {}
  toggleHam($event: Event) {
    this.sidebar.toggleSidebar();

    $event.preventDefault();
  }
}
