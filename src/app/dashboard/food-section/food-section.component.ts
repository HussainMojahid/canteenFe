import { Component, Input } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
@Component({
  selector: 'app-food-section',
  templateUrl: './food-section.component.html',
  styleUrls: ['./food-section.component.css'],
})
export class FoodSectionComponent {
  constructor(public card: FoodService) {}

  @Input() category: number = -1;
  changeCard(action: string, $event: Event) {
    console.log($event);

    this.card.toggleCard(action, this.category);
    $event.preventDefault();
  }
}
