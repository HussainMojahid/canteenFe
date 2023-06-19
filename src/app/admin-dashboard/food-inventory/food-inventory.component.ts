import { Component, OnInit } from '@angular/core';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { FoodInventoryServiceService } from 'src/app/services/food-inventory-service.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';


import Swal from 'sweetalert2';
@Component({
  selector: 'app-food-inventory',
  templateUrl: './food-inventory.component.html',
  styleUrls: ['./food-inventory.component.css'],
})
export class FoodInventoryComponent  {
  
  backArrow = faArrowLeft;
  show: boolean=true;
  passwordHide(){
    this.show=!this.show
  }

  constructor(public auth: AuthService,
    private http: HttpClient,
    private userService: UserService) {
  }

  magbutton = faMagnifyingGlass;
  
  

}

  