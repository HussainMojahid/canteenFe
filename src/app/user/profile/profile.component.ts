import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{
  backArrow = faArrowLeft;
  isDisable = false;
  inputDisable= false;
// Keep the input disabled by default
  

  constructor(
    public auth: AuthService,
    private userService: UserService
  ) {
    this.auth.user$.subscribe();
  }
  ngOnInit(): void {
    this.auth.user$
      .pipe(
        map((val: any) => {
          console.log(val.id);

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

  OrgList: any[] = [];
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
}
