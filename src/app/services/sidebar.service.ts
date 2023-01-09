import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(private auth: AuthService) {}

  isSidebarVisible$ = false;
  onHam = false;

  toggleSidebar() {
    this.isSidebarVisible$ = !this.isSidebarVisible$;
    this.onHam = !this.onHam;
  }
}
