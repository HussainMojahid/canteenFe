

// import { Component } from '@angular/core';
// import { FooterService } from 'src/app/services/footer.service';

// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.css']
// })
// export class FooterComponent {
//   constructor(private footerService: FooterService) {}

//   setActive(section: string): void {
//     this.footerService.setActive(section);
//   }

//   isActive(section: string): boolean {
//     return this.footerService.isActive(section);
//   }
// }


import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router, private footerService: FooterService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        if (currentRoute === '/') {
          this.footerService.setActive('dashboard');
        }
        if (currentRoute === '/Account') {
          this.footerService.setActive('account');
        }
      }
    });
  }

  setActive(section: string): void {
    this.footerService.setActive(section);
  }

  isActive(section: string): boolean {
    return this.footerService.isActive(section);
  }
}
