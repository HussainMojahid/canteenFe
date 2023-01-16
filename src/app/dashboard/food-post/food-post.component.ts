import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-food-post',
  templateUrl: './food-post.component.html',
  styleUrls: ['./food-post.component.css']
})
export class FoodPostComponent {

  constructor(public auth : AuthService){}

  @Input() category = 'lunch';
  backArrow = faArrowLeft;

  foodname = new FormControl('', [Validators.required, Validators.min(3)]);
  date = new FormControl(new Date, [Validators.required]);
  price = new FormControl('', [Validators.required]);
  
 
  

  foodForm = new FormGroup({
    foodname: this.foodname,
    date: this.date,
    price: this.price,
    
  });
  addFood(){

  }


  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];
selectedCity: any;
    selectedCityIds: string[] | undefined;
    selectedCityName = 'Vilnius';
    selectedCityId: number | undefined;
    selectedUserIds: number[] | undefined;


}
