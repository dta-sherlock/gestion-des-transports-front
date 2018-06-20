import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
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

  listeVehicules : Array<Vehicules>;

  immatFilter = '';
  brandFilter = '';

  @ViewChild('childModal') childModal: CommonModalComponent;
  @ViewChild(CreerVehiculeComponent) creerComponent:CreerVehiculeComponent;

  constructor(private adminService : AdminServices, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
      this.adminService.getVehicules().subscribe(liste => (this.listeVehicules = liste));
   // this.adminService.getImmatFilter().subscribe(immatriculation => (this.immatFilter = immatriculation));
   // this.adminService.getBrandFilter().subscribe(brand => (this.brandFilter = brand));
  }

  addVehicule(){
    this.childModal.show();
  }

}
