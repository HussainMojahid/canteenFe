import { Component, Input } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { KeenSliderInstance } from 'keen-slider';
@Component({
  selector: 'app-food-section',
  templateUrl: './food-section.component.html',
  styleUrls: ['./food-section.component.css'],
})
export class FoodSectionComponent {
  @Input() category: number = -1;
  @Input() currentSlide: number = -1;
  @Input() slider!: KeenSliderInstance;
  constructor(public card: FoodService) {}
}
