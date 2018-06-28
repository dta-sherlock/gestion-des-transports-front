import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CarpoolBooking} from '../models/CarpoolBooking';
import {BookingApiService} from '../ServicesApi/booking-api.service';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.css']
})
export class ModalConfirmationComponent implements OnInit {
  modalRef: BsModalRef;
  @Input() obj: CarpoolBooking ;
  constructor(private modalService: BsModalService, private api: BookingApiService) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  reservation() {
    this.api.reserverCovoiturage(1, this.obj.id).subscribe();
  }

  ngOnInit() {
  }
}
