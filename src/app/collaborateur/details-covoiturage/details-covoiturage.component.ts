import { Component, OnInit, Input } from '@angular/core';
import { CarpoolBooking } from '../../models/annonces/CarpoolBooking';
import { CollabServiceService } from '../services/collab-service.service';

@Component({
  selector: 'app-details-covoiturage',
  templateUrl: './details-covoiturage.component.html',
  styleUrls: ['./details-covoiturage.component.css']
})
export class DetailsCovoiturageComponent implements OnInit {

  @Input()
  carpoolBooking : CarpoolBooking;

  constructor(private collabServ : CollabServiceService) { }

  ngOnInit() {
  }

  publishBooking(){
    this.collabServ.createCarpoolBooking
  }


}