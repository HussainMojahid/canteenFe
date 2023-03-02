import { Component, Input } from '@angular/core';
import { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-left-arrow-button',
  templateUrl: './left-arrow-button.component.html',
  styleUrls: ['./left-arrow-button.component.css'],
})
export class LeftArrowButtonComponent {
  @Input() currentSlide: number = -1;
  @Input() slider!: KeenSliderInstance;
}
