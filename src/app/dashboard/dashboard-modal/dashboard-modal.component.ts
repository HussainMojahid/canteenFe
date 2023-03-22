import { Component } from '@angular/core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.css']
})
export class DashboardModalComponent implements OnInit {
  plusbutton = faPlus;
  toggleBreakfast = true;
  toggleLunch=true;
  toggleHightea=true;
  id:any;

  constructor(
    public sidebar: SidebarService,
    public food: FoodService,
    public activatedroute: ActivatedRoute,
    public auth: AuthService
  ) {}
  ngOnInit(): void {
    if (this.food.selectedDay$.getValue()) {
      this.food.todayFood();
      // this.setSlider();
    } else {
      this.food.tommorowFood();
      // this.setSlider();
    }
 }
//  ngOnDisplay():void{
//   if(this.id=1){
//     this.displayBreakFast()
//   }
//  }

//  buttons = document.getElementById('breakfast') as HTMLButtonElement | null;
//  buttons?.setAttribute(disabled:any);


  // displayBreakFast(){
  //   this.toggleBreakfast = !this.toggleBreakfast;
  //   this.Bslider = new KeenSlider(this.breakfastSection.nativeElement, {
  //     initial: this.BcurrentSlide,
  //     slides: this.food.foodItemBreakFast.length,
  //     defaultAnimation: {
  //       duration: 1000,
  //     },
  //     slideChanged: (s) => {
  //       this.BcurrentSlide = s.track.details.rel;
  //     },
  //     detailsChanged: (s) => {
  //       this.Bopacities = s.track.details.slides.map(
  //         (slide) => slide.portion
  //       );
  //     },
  //   });
  // }
  // displayHightea(){
  //   this.toggleHightea = !this.toggleHightea;
  //   this.Hslider = new KeenSlider(this.highTeaSection.nativeElement, {
  //     initial: this.HcurrentSlide,
  //     slides: this.food.foodItemSnacks.length,
  //     defaultAnimation: {
  //       duration: 1000,
  //     },
  //     slideChanged: (s) => {
  //       this.HcurrentSlide = s.track.details.rel;
  //     },
  //     detailsChanged: (s) => {
  //       this.Hopacities = s.track.details.slides.map(
  //         (slide) => slide.portion
  //       );
  //     },
  //   });
  // }
  // displayLunch(){
  //   this.toggleLunch = !this.toggleLunch;
  //    this.Lslider = new KeenSlider(this.lunchSection.nativeElement, {
  //       initial: this.LcurrentSlide,
  //       slides: this.food.foodItemLunch.length,
  //       defaultAnimation: {
  //         duration: 1000,
  //       },
  //       slideChanged: (s) => {
  //         this.LcurrentSlide = s.track.details.rel;
  //       },
  //       detailsChanged: (s) => {
  //         this.Lopacities = s.track.details.slides.map(
  //           (slide) => slide.portion
  //         );
  //       },
  //     });
  // }

  // ngif(condition=1){
  //   this.displayBreakFast();
  //   this.displayLunch.[disabled]=""
  //  }
  //  ngIfThen(condition=2){
  //   this.displayLunch();
   
  //  }
  //  ngIfElse(condition=3){
  //   this.displayHightea();
   
  //  }


    foodItemLunch : any[] = [{
      id: 1,
      name : 'poha',
      imageUrl : 'https://www.shutterstock.com/image-photo/indian-breakfast-dish-poha-260nw-765020587.jpg',
    
    },{id: 1,
      name : 'Samosa',
      imageUrl : 'https://thumbs.dreamstime.com/b/samosa-24578861.jpg'}]

  // Bslider!: KeenSliderInstance;
  // Lslider!: KeenSliderInstance;
  // Hslider!: KeenSliderInstance;

  BcurrentSlide: number = 1;
  LcurrentSlide: number = 1;
  HcurrentSlide: number = 1;

  setSlider() {
    setTimeout(() => {
      // this.Bslider = new KeenSlider(this.breakfastSection.nativeElement, {
      //   initial: this.BcurrentSlide,
      //   slides: this.food.foodItemBreakFast.length,
      //   defaultAnimation: {
      //     duration: 1000,
      //   },
      //   slideChanged: (s) => {
      //     this.BcurrentSlide = s.track.details.rel;
      //   },
      //   detailsChanged: (s) => {
      //     this.Bopacities = s.track.details.slides.map(
      //       (slide) => slide.portion
      //     );
      //   },
      // });

      // this.Hslider = new KeenSlider(this.highTeaSection.nativeElement, {
      //   initial: this.HcurrentSlide,
      //   slides: this.food.foodItemSnacks.length,
      //   defaultAnimation: {
      //     duration: 1000,
      //   },
      //   slideChanged: (s) => {
      //     this.HcurrentSlide = s.track.details.rel;
      //   },
      //   detailsChanged: (s) => {
      //     this.Hopacities = s.track.details.slides.map(
      //       (slide) => slide.portion
      //     );
      //   },
      // });
      // this.Lslider = new KeenSlider(this.lunchSection.nativeElement, {
      //   initial: this.LcurrentSlide,
      //   slides: this.food.foodItemLunch.length,
      //   defaultAnimation: {
      //     duration: 1000,
      //   },
      //   slideChanged: (s) => {
      //     this.LcurrentSlide = s.track.details.rel;
      //   },
      //   detailsChanged: (s) => {
      //     this.Lopacities = s.track.details.slides.map(
      //       (slide) => slide.portion
      //     );
      //   },
      // });
    }, 300);
  }

  // ngOnDestroy() {
  //   if (this.Bslider) this.Bslider.destroy();
  //   if (this.Lslider) this.Lslider.destroy();
  //   if (this.Hslider) this.Hslider.destroy();
  // }
}
