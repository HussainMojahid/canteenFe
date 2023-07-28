import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { faArrowLeft, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import {  InvitePopupComponent } from 'src/app/invite-pop-up/invite-pop-up.component';


@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html', 

})
export class InviteFriendComponent {
  backArrow = faArrowLeft;
  shareNodes = faShareNodes;

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private userService: UserService
  ) { }
}



@NgModule({
  declarations: [
    InviteFriendComponent,
    InvitePopupComponent, // Add the InvitePopupComponent to the declarations list
  ],
  imports: [
    CommonModule,
    // Other modules needed for this module
  ],
})
export class InviteFriendModule { }

