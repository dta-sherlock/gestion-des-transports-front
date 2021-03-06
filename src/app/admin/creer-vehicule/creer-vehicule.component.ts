import {Component, Input, OnChanges, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import CompanyCar, {CarCategory} from "../../models/vehicules/CompanyCar";
import {AdminServices} from "../services/admin-services.service";
import {CommonModalComponent} from '../../modals/common-modal/common-modal.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creer-vehicule',
  templateUrl: './creer-vehicule.component.html',
  styleUrls: ['./creer-vehicule.component.css']
})
export class CreerVehiculeComponent implements OnInit {

  creationForm: FormGroup;


  @Output()
  vehiculesSubmitted: EventEmitter<CompanyCar>= new EventEmitter<CompanyCar>();


  category = CarCategory;

  afficherCategories(): Array<string> {
    var keys = Object.keys(this.category);
    return keys;
  }

  constructor(
    private fb: FormBuilder, private adminService: AdminServices, private router: Router) {
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
      availableSeats: ['', Validators.required],
      photo: ['', Validators.required]
    });
  }



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

  get availableSeats() {
    return this.creationForm.get('availableSeats');
  }

  get photo() {
    return this.creationForm.get('photo');
  }

  ngOnInit() {

  }

  navigateToList() {
    this.router.navigate(['']);
  }
  createVehicule() {
    const newVehicule = new CompanyCar(
      this.immatriculation.value,
      this.brand.value,
      this.model.value,
      this.carCategory.value,
      this.availableSeats.value,
      this.photo.value
    );

    this.adminService.publishVehicule(newVehicule).subscribe();
    this.vehiculesSubmitted.emit();
  }


}
