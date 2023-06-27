import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee-feedback',
  templateUrl: './employee-feedback.component.html',
  styleUrls: ['./employee-feedback.component.css']
})
export class EmployeeFeedbackComponent {
  backArrow = faArrowLeft;


  constructor(
    public auth: AuthService,
  ) {}
}
