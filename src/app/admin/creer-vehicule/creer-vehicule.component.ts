import {Component, Input, OnChanges, OnInit, ViewChild, ElementRef} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import Vehicules, {CarCategory} from "../../models/vehicules/vehicules";
import {AdminServices} from "../services/admin-services.service";

@Component({
  selector: 'app-creer-vehicule',
  templateUrl: './creer-vehicule.component.html',
  styleUrls: ['./creer-vehicule.component.css']
})
export class CreerVehiculeComponent implements OnInit {

  category = CarCategory;
  afficherCategories() : Array<string> {
    var keys = Object.keys(this.category);
    return keys;
  }

  constructor(
    private fb: FormBuilder, private adminService : AdminServices
  )
  {
    this.creationForm = this.fb.group({
      immatriculation: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Z][A-Z]-\d\d\d-[A-Z][A-Z]$/)
        ]
      ],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      carCategory: ['', Validators.required],
      placeAvailable : ['', Validators.required],
      photo: ['', Validators.required]
    });
  }


  creationForm: FormGroup;

  get immatriculation() {
    return this.creationForm.get('immatriculation');
  }
  get brand() {
    return this.creationForm.get('brand');
  }

  get model() {
    return this.creationForm.get('model');
  }

  get carCategory() {
    return this.creationForm.get('carCategory');
  }

  get placeAvailable() {
    return this.creationForm.get('placeAvailable');
  }

  get photo() {
    return this.creationForm.get('photo');
  }

  ngOnInit() {

  }

    createVehicule() {
    const newVehicule = new Vehicules(
      this.immatriculation.value,
      this.brand.value,
      this.model.value,
      this.carCategory.value,
      this.placeAvailable.value,
      this.photo.value
    );
    console.log(newVehicule);

    this.adminService.publishVehicule(newVehicule).subscribe(vehicule => {
      console.log(vehicule);
    });
  }
}
