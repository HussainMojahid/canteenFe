import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  isFormValid: boolean = true;
  issueRegisterForm = new FormGroup({
    subject: new FormControl('', [Validators.required, Validators.minLength(4)]),
    message: new FormControl('')
  });

  constructor(private auth: AuthService,private router: Router) {}

  ngOnInit(): void {
  }

  submitIssue() {
    if ( this.issueRegisterForm.value.subject === '') {
      this.isFormValid = false;
    } 
    else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton:
            'text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
          cancelButton:
            'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
        },
        buttonsStyling: false,
      });
  
      swalWithBootstrapButtons
        .fire({
          title: 'Are you sure want to submit issue?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, submit it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Feedback!', 'Thanks for your feedback.', 'success');
            // api call
            this.auth.feedback(this.issueRegisterForm.value).subscribe( (result: any) => {
              this.router.navigateByUrl('/');
              if ( result ) {
              }
            })
          }
        });  
    }
  }

  get subject() {
    return this.issueRegisterForm.get('subject');
  }

  get message() {
    return this.issueRegisterForm.get('message');
  }
}
