import { Component, Input } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
@Component({
  selector: 'app-food-section',
  templateUrl: './food-section.component.html',
  styleUrls: ['./food-section.component.css'],
})
export class FoodSectionComponent {
  constructor(public card: FoodService) {}

  @Input() FoodList: any[] = [];
}
