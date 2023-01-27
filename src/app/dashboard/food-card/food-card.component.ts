import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css'],
})
export class FoodCardComponent implements OnInit, OnDestroy {
  constructor(public card: FoodService, public el: ElementRef) {}

  @Input() cardId = '';
  @Input() imgUrl = 'https://ionicframework.com/docs/img/demos/thumbnail.svg';
  @Input() category : number = -1;

  ngOnInit(): void {
    this.card.register(this.cardId,this.category);
    // document.body.appendChild(this.el.nativeElement);

  }

  ngOnDestroy(): void {
    this.card.unregister(this.cardId,this.category);
  //   document.body.removeChild(this.el.nativeElement);

  }
}
