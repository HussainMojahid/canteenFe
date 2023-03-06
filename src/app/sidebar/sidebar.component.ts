import { Component } from '@angular/core';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(public sidebar: SidebarService,public auth:AuthService) {}
  InventoryIco = faWarehouse;
  toggle() {
    this.sidebar.toggleSidebar();
  }
}
