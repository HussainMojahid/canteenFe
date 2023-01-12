import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modal = false;

  isModalOpen(): boolean {
    return this.modal;
  }

  toggleModal(id: string) {
    this.modal = !this.modal;
  }
}
