import { Component, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent {
  @ViewChild('childModal') public childModal: ModalDirective;
  @Input() title?: string;

  constructor() { }

  show() {
    this.childModal.show();
  }

  hide() {
    this.childModal.hide();
  }

}