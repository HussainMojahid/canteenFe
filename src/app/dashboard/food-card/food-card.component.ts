import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css'],
})
export class FoodCardComponent implements OnInit, OnDestroy {
  constructor(public card: FoodService, public el: ElementRef) {}

  @Input() name = '';
  @Input() category: string = '';
  @Input() price: string = '';
  icon: string = '';
  ngOnInit(): void {
    // this.card.register(this.cardId, this.category);
    switch (this.category) {
      case 'Bread':
        this.icon = '../../../assets/img/Group 3129.png';
        break;
      case 'Raita':
        this.icon = '../../../assets/img/Group 3145.png';
        break;
      case 'Salad':
        this.icon = '../../../assets/img/Group 3152.png';
        break;
      case 'Sabzi':
        this.icon = '../../../assets/img/Group 3154.png';
        break;
      case 'Rice':
        this.icon = '../../../assets/img/Group 3121.png';
        break;
      case 'Full-Thali':
        this.icon = '../../../assets/img/fullMeal.png';
        break;
      case 'Half-Thali':
        this.icon = '../../../assets/img/Group 3121.png';
        break;
      default:
        this.icon = '../../../assets/img/Group 3121.png';
        break;

    }
  }

  ngOnDestroy(): void {
    //   this.card.unregister(this.cardId, this.category);
  }
}
