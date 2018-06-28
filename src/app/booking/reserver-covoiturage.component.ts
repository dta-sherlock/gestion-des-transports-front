import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CarpoolBooking} from '../models/CarpoolBooking';
import {BookingApiService} from '../ServicesApi/booking-api.service';

@Component({
  selector: 'app-reserver-covoiturage',
  templateUrl: './reserver-covoiturage.component.html',
  styleUrls: ['./reserver-covoiturage.component.css'],
})
export class ReserverCovoiturageComponent implements OnInit {

  listCovoiturage: Array<CarpoolBooking>;
  startingAddressFilter = '';
  arrivalAddressFilter = '';

  constructor(private booking: BookingApiService ) {

  }



  ngOnInit() {
    this.booking.getReservation().subscribe(value => {
      console.log(value);
      this.listCovoiturage = value;
    });
  }

}
