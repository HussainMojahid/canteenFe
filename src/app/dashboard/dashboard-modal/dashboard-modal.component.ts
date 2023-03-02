import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.css'],
})
export class DashboardModalComponent implements OnInit {
  plusbutton = faPlus;

  constructor(
    public sidebar: SidebarService,
    public food: FoodService,
    public activatedroute: ActivatedRoute,
    public auth: AuthService
  ) {}
  ngOnInit(): void {
    if (this.food.selectedDay) {
      this.food.todayFood();
      this.setSlider();
    } else {
      this.food.tommorowFood();
      this.setSlider();
    }
  }

  @ViewChild('breakfastSection')
  breakfastSection!: ElementRef<HTMLElement>;
  @ViewChild('lunchSection')
  lunchSection!: ElementRef<HTMLElement>;
  @ViewChild('highTeaSection')
  highTeaSection!: ElementRef<HTMLElement>;

  Bopacities: number[] = [];
  Lopacities: number[] = [];
  Hopacities: number[] = [];

  Bslider!: KeenSliderInstance;
  Lslider!: KeenSliderInstance;
  Hslider!: KeenSliderInstance;

  BcurrentSlide: number = 1;
  LcurrentSlide: number = 1;
  HcurrentSlide: number = 1;

  setSlider() {
    setTimeout(() => {
      this.Bslider = new KeenSlider(this.breakfastSection.nativeElement, {
        initial: this.BcurrentSlide,
        slides: this.food.foodItemBreakFast.length,
        defaultAnimation: {
          duration: 1000,
        },
        slideChanged: (s) => {
          this.BcurrentSlide = s.track.details.rel;
        },
        detailsChanged: (s) => {
          this.Bopacities = s.track.details.slides.map(
            (slide) => slide.portion
          );
        },
      });
      this.Hslider = new KeenSlider(this.highTeaSection.nativeElement, {
        initial: this.HcurrentSlide,
        slides: this.food.foodItemSnacks.length,
        defaultAnimation: {
          duration: 1000,
        },
        slideChanged: (s) => {
          this.HcurrentSlide = s.track.details.rel;
        },
        detailsChanged: (s) => {
          this.Hopacities = s.track.details.slides.map(
            (slide) => slide.portion
          );
        },
      });
      this.Lslider = new KeenSlider(this.lunchSection.nativeElement, {
        initial: this.LcurrentSlide,
        slides: this.food.foodItemLunch.length,
        defaultAnimation: {
          duration: 1000,
        },
        slideChanged: (s) => {
          this.LcurrentSlide = s.track.details.rel;
        },
        detailsChanged: (s) => {
          this.Lopacities = s.track.details.slides.map(
            (slide) => slide.portion
          );
        },
      });
    }, 300);
  }

  ngOnDestroy() {
    if (this.Bslider) this.Bslider.destroy();
    if (this.Lslider) this.Lslider.destroy();
    if (this.Hslider) this.Hslider.destroy();
  }
}
