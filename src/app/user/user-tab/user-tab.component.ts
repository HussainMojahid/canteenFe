import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css'],
})
export class UserTabComponent {
  username = JSON.parse(localStorage.getItem('_username_canteen_app') || '');
  email = JSON.parse(localStorage.getItem('_email_canteen_app') || '');

  constructor(
    public sidebar: SidebarService,
    private route: Router,
    public auth: AuthService
  ) {}

  toggle() {
    this.sidebar.toggleUserTab();
  }

  logout() {
    this.auth.logout();

    this.auth.isAuthenticated();
  }
}
