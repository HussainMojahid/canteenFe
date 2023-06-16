// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.css']
// })
// export class FooterComponent {

//   // getDiv(){
//   //   this.router.navigate(['/Account'])
//   // }

//   isActive: boolean = false;

//   toggleActive(): void {
//     this.isActive = !this.isActive;
//   }
// }


import { Component } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private footerService: FooterService) {}

  setActive(section: string): void {
    this.footerService.setActive(section);
  }

  isActive(section: string): boolean {
    return this.footerService.isActive(section);
  }
}


