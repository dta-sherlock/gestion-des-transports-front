import {Component, OnInit,  ViewChild, ViewContainerRef} from '@angular/core';
import Vehicules, {CarCategory} from "../../models/vehicules/vehicules";
import {CreerVehiculeComponent} from "../creer-vehicule/creer-vehicule.component";
import {AdminServices} from "../services/admin-services.service";
import {CommonModalComponent} from "../../modals/common-modal/common-modal.component";




@Component({
  selector: 'app-gerer-vehicules',
  templateUrl: './gerer-vehicules.component.html',
  styleUrls: ['./gerer-vehicules.component.css']
})
export class GererVehiculesComponent implements OnInit {

  immatFilter : string = '';

  brandFilter : string = '';

  listeVehicules : Array<Vehicules> = [
    new Vehicules('XX-123-XX', 'Peugeot', '206', CarCategory.BerlinesTailleS, 5, "../assets/logo_transport_route.png" )
  ];

  @ViewChild('childModal') childModal: CommonModalComponent;
  @ViewChild(CreerVehiculeComponent) creerComponent:CreerVehiculeComponent;

  constructor(private adminService : AdminServices, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
      this.adminService.getVehicules().subscribe(liste => (this.listeVehicules = liste));
  }

  addVehicule(){
    this.childModal.show();
  }
}
