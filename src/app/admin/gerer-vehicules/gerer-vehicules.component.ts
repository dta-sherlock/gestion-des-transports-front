import {Component, OnInit,  ViewChild, ViewContainerRef} from '@angular/core';
import CompanyCar from "../../models/vehicules/CompanyCar";
import {CreerVehiculeComponent} from "../creer-vehicule/creer-vehicule.component";
import {AdminServices} from "../services/admin-services.service";
import {CommonModalComponent} from "../../modals/common-modal/common-modal.component";




@Component({
  selector: 'app-gerer-vehicules',
  templateUrl: './gerer-vehicules.component.html',
  styleUrls: ['./gerer-vehicules.component.css']
})
export class GererVehiculesComponent implements OnInit {

  immatFilter: string = '';

  brandFilter: string = '';

  listeVehicules: Array<CompanyCar>;

  @ViewChild('childModal') childModal: CommonModalComponent;
  @ViewChild(CreerVehiculeComponent) creerComponent: CreerVehiculeComponent;

  constructor(private adminService: AdminServices) { }

  ngOnInit() {
      this.adminService.getVehicules().subscribe(liste => (this.listeVehicules = liste));
  }

  addVehicule(){
    this.childModal.show();
  }
  refreshList(){
    this.childModal.hide();
    this.adminService.getVehicules().subscribe(liste => (this.listeVehicules = liste));
  }
}
