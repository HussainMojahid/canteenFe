import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.css'],
})
export class AddItemButtonComponent {
  constructor(public activatedroute: ActivatedRoute) {}
  @Input() state: any;
  @Input() link: any;
  plusbutton = faPlus;
}
