import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-please-login',
  templateUrl: './please-login.component.html',
  styleUrls: ['./please-login.component.css'],
})
export class PleaseLoginComponent {
  constructor(public modal: ModalService) {}

  openLogin($event: Event) {
    this.modal.toggleModal('auth');
    $event.preventDefault;
  }
}
