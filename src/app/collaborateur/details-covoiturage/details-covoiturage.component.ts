import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CarpoolBooking } from '../../models/annonces/CarpoolBooking';
import { CollabServiceService } from '../services/collab-service.service';

@Component({
  selector: 'app-details-covoiturage',
  templateUrl: './details-covoiturage.component.html',
  styleUrls: ['./details-covoiturage.component.css']
})
export class DetailsCovoiturageComponent implements OnInit {

  @Input()
  carpoolBooking: CarpoolBooking;

  constructor() { }

  ngOnInit() {
  }
}