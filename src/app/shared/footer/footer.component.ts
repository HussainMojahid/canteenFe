import { Component } from '@angular/core';

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
