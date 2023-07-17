import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import ICurrentUser from 'src/app/models/currentUser.modal';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { SetDisabledStateOption } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  [x: string]: any;
  user: ICurrentUser | null = null;
  backArrow = faArrowLeft;
  AlertType = 'success';
  showAlert: boolean = false;
  isDisable = false;
  inputDisable= false;
  alertMsg = 'Please Wait! Under Process';
  id: number | undefined = -1;

  OrgList: any[] = [];
  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private userService: UserService,
    private toastr: ToastrService

  ) {
    this.userService.getUserOrganisation()
  }
  ngOnInit(): void {
    this.auth.user$
      .pipe(
        map((val: any) => {
          console.log(val.id);

          this.id = val.id;
        })
      )
      .subscribe();
    this.auth.getCurrentUser().subscribe((val) => {
      this.auth.user$.next(val);
      console.log(this.userService.getUserOrganisation())
      this.username.setValue(this.auth.user$.getValue()?.username);
      this.email.setValue(this.auth.user$.getValue()?.email);

      this.EmployeeId.setValue(this.auth.user$.getValue()?.EmpId);
    });
    this.userService.getOrganization();
    console.log(this.userService.Organization);
    this.OrgList = this.userService.Organization;
    // this.organization.setValue(this.userService.getUserOrganisation())
  }

  username = new FormControl(this.auth.user$.getValue()?.username, [
    Validators.required,
    Validators.minLength(3),
  ]);
  email = new FormControl(this.auth.user$.getValue()?.email, [
    Validators.required,
    Validators.email,
  ]);

  organization = new FormControl(this.userService.getUserOrganisation(), [Validators.required]);
  EmployeeId = new FormControl(this.auth.user$.getValue()?.EmpId, [
    Validators.required,
  ]);
  profession = new FormControl(this.auth.user$.getValue()?.email, [
    Validators.required,
    Validators.email,
  ]);

  EditForm = new FormGroup({
    username: this.username,
    email: this.email,
    organization: this.organization,
    EmployeeId: this.EmployeeId,
  });

  update() {
    this.AlertType = 'alert';
    this.showAlert = true;
    this.toastr.success('Account Updated Successfully');
    this.auth
      .update(this.EditForm, this.id!)

      .subscribe({
        next: (val) => {
          this.showSwal();
          this.AlertType = 'success';
          this.showAlert = true;
          this.alertMsg = 'Account Created';
          this.auth.isAuthenticated();
          this.toastr.success('Account Updated Successfully');
        
          
        },
        
        
  // update() {
  //   this.auth.update(this.EditForm, this.id!).subscribe({
  //     next: (val) => {
  //       this.showSwal();
  //     },
  //   });

  //   return;
  // }

        error: (e) => {
          this.AlertType = 'error';
          this.showAlert = true;
          this.alertMsg = e.error.error.message;
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
          this['router'].navigateByUrl('/profile');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      });
  }
  
}
