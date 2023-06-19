import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  backArrow = faArrowLeft;
  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }

  feedback() {
    const values = { ...this.registerForm.value };
    this.auth.feedback(values).subscribe({
      next: () => {
        this.router.navigateByUrl('/members');
      },
      error: () => {
        console.log('error');
      },
    });
  }
}
