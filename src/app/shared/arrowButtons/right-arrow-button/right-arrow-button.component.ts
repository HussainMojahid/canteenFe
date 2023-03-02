import { Component, Input } from '@angular/core';
import { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-right-arrow-button',
  templateUrl: './right-arrow-button.component.html',
  styleUrls: ['./right-arrow-button.component.css'],
})
export class RightArrowButtonComponent {
  @Input() currentSlide: number = -1;
  @Input() slider!: KeenSliderInstance;
}
