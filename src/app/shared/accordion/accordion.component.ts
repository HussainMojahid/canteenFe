import { Component, OnInit, Input } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent{
  chevronUp = faChevronUp;
  chevronDown = faChevronDown;
  isAccordionOpen:boolean = false;

@Input() headerText:string = '';
@Input() paraText:string = '';

}
