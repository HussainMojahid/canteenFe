import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
    public activatedroute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (this.food.selectedDay) {
      this.food.todayFood();
    } else {
      this.food.tommorowFood();
    }
  }
}
