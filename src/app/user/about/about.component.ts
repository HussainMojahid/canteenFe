import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccordionComponent } from 'src/app/shared/accordion/accordion.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent  {
  backArrow = faArrowLeft;
  

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private userService: UserService
  ) {}
}

