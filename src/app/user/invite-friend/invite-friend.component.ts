import { Component } from '@angular/core';
import ICurrentUser from 'src/app/models/currentUser.modal';
import { AuthService } from 'src/app/services/auth.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrls: ['./invite-friend.component.css']
})
export class InviteFriendComponent {
  backArrow = faArrowLeft;
  shareNodes = faShareNodes;

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private userService: UserService
  ) {}
}
