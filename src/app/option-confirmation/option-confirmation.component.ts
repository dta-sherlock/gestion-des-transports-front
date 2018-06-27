import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-option-confirmation',
  templateUrl: './option-confirmation.component.html',
  styleUrls: ['./option-confirmation.component.css']
})
export class OptionConfirmationComponent implements OnInit {


  @ViewChild('childModal') public childModal: ModalDirective;
  @Input() title?: string;

  constructor() { }

  show() {
    this.childModal.show();
  }

  hide() {
    this.childModal.hide();
  }

  ngOnInit() {
  }

}
