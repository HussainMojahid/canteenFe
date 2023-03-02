import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css'],
})
export class FoodCardComponent {
  constructor(public card: FoodService, public el: ElementRef) {}

  @Input() cardId = '';
  @Input() imgUrl = 'https://ionicframework.com/docs/img/demos/thumbnail.svg';
  @Input() category: number = -1;
}
