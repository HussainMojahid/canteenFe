import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import ICurrentUser from 'src/app/models/currentUser.modal';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

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
    private userService: UserService
  ) {}
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
      this.username.setValue(this.auth.user$.getValue()?.username);
      this.email.setValue(this.auth.user$.getValue()?.email);

      this.EmployeeId.setValue(this.auth.user$.getValue()?.EmpId);
    });
    this.userService.getOrganization();
    console.log(this.userService.Organization);
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

    this.auth
      .update(this.EditForm, this.id!)

      .subscribe({
        next: () => {
          this.AlertType = 'success';
          this.showAlert = true;
          this.alertMsg = 'Account Created';
          this.auth.isAuthenticated();
        },

        error: (e) => {
          this.AlertType = 'error';
          this.showAlert = true;
          this.alertMsg = e.error.error.message;
        },
      });

    return;
  }
}
