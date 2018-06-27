import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CommonModalComponent} from '../common-modal/common-modal.component';


@Component({
  selector: 'app-reserver-covoiturage',
  templateUrl: './reserver-covoiturage.component.html',
  styleUrls: ['./reserver-covoiturage.component.css'],
})
export class ReserverCovoiturageComponent implements OnInit {

  @ViewChild('childModal') childModal: CommonModalComponent;
  constructor(private viewContainerRef: ViewContainerRef) {

  }

  ngOnInit() {
    this.childModal.show();
  }

}
