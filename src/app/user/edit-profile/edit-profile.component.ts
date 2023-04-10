import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ICurrentUser from 'src/app/models/currentUser.modal';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  user: ICurrentUser | null = null;
  backArrow = faArrowLeft;
  AlertType = 'success';
  showAlert: boolean = false;
  alertMsg = 'Please Wait! Under Process';
  id: number | undefined = -1;
  OrgList: any[] = [];
  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.auth.getID();
    this.auth.getCurrentUser().subscribe((val) => {
      this.auth.user$.next(val);
      this.username.setValue(this.auth.user$.getValue()?.username);
      this.email.setValue(this.auth.user$.getValue()?.email);

      this.EmployeeId.setValue(this.auth.user$.getValue()?.EmpId);
    });
    this.userService.getOrganization();
    this.OrgList = this.userService.Organization;
  }

  username = new FormControl(this.auth.user$.getValue()?.username, [
    Validators.required,
    Validators.minLength(3),
  ]);
  email = new FormControl(this.auth.user$.getValue()?.email, [
    Validators.required,
    Validators.email,
  ]);

  organization = new FormControl('', [Validators.required]);
  EmployeeId = new FormControl(this.auth.user$.getValue()?.EmpId, [
    Validators.required,
    Validators.maxLength(11),
    Validators.min(1),
  ]);

  EditForm = new FormGroup({
    username: this.username,
    email: this.email,
    organization: this.organization,
    EmployeeId: this.EmployeeId,
  });

  update() {
    this.auth.update(this.EditForm, this.id!).subscribe({
      next: (val) => {
        this.showSwal();
      },
    });

    return;
  }
  showSwal() {
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
        title: 'Are you sure want to Update?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Update it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/profile');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      });
  }
}
