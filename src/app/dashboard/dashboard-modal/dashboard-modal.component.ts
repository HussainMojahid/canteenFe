import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from 'src/app/services/food.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { AuthService } from 'src/app/services/auth.service';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.css'],
})
export class DashboardModalComponent implements OnInit {
  [x: string]: any;
  plusbutton = faPlus;
  toggleBreakfast = false;
  toggleLunch = true;
  toggleHightea = false;
  toggleToday = true;
  toggleTomorrow = false;
  tab: string = '';
  Date: Date = new Date();

  id: any;
  // tabName: string | undefined;
  constructor(
    public auth: AuthService,
    public sidebar: SidebarService,
    public food: FoodService,
    public activatedroute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.changeTab('Lunch');
  }
  fetchFoodData(): void {
    this['foodService'].getFoodData().subscribe((data: any) => {
      this['lunchList'] = data.lunch;
      this['breakfastList'] = data.breakfast;
      this['snacksList'] = data.snacks;
    });
  }

  changeTab(tab: string): void {
    this.toggleBreakfast = tab === 'BreakFast';
    this.toggleLunch = tab === 'Lunch';
    this.toggleHightea = tab === 'Snacks';
    this.tab = tab;
    this.updatFoodList(tab, this.Date);
  }

  updatFoodList(tab: string, date: Date) {
    console.log(tab, date);
    this.Date = date;

    this.food.getFoodByCategoryAndDate(tab, date).subscribe();
  }

  updatFoodList1(event: Date) {
    // console.log($event);
    console.log(event);

    // this.food.getFoodByCategoryAndDate(tab, date).subscribe();
  }
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  displayBreakFast() {
    if (this.toggleBreakfast == true) {
      !this.toggleLunch;
    }
  }

  //  displayLunch(){
  //   this.toggleLunch = !this.toggleLunch
  //  }

  displayHighTea() {
    this.toggleHightea = !this.toggleHightea;
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

  BcurrentSlide: number = 1;
  LcurrentSlide: number = 1;
  HcurrentSlide: number = 1;

  setSlider() {
    setTimeout(() => {}, 300);
  }
}
