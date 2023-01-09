import { Component, ElementRef, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalID = '';

  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    console.log("On init Called");
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    console.log("On Destroyed Called");
    
    document.body.removeChild(this.el.nativeElement)
  }
  closeModal() {
    this.modal.toggleModal(this.modalID);
  }

}
