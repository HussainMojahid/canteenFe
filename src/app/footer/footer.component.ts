import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
  
})
export class FooterComponent {

  // getDiv(){
  //   this.router.navigate(['/Account'])
  // }

  isActive: boolean = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
  }

}
