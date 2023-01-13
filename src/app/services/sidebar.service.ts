import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(private auth: AuthService) {}

  isSidebarVisible$ = false;
  isUserTabVisible = false;
  onHam = false;

  toggleSidebar() {
    this.isSidebarVisible$ = !this.isSidebarVisible$;
    this.onHam = !this.onHam;
  }
  toggleUserTab() {
    this.isUserTabVisible = !this.isUserTabVisible;
  }
}
