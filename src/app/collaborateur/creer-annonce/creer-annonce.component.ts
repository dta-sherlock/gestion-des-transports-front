import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import Car from '../../models/annonces/Car';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarpoolBooking } from '../../models/annonces/CarpoolBooking';
import { DetailsCovoiturageComponent } from '../details-covoiturage/details-covoiturage.component';
import { CommonModalComponent } from '../../modals/common-modal/common-modal.component';
import { CollabServiceService } from '../services/collab-service.service';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.css']
})
export class CreerAnnonceComponent implements OnInit {

  carpoolCar: Car;
  itineraireForm: FormGroup;
  vehiculeForm: FormGroup;
  dateTimeForm: FormGroup;

  carpoolBooking: CarpoolBooking;
  car: Car;

  @ViewChild('childModal') childModal: CommonModalComponent;
  @ViewChild(DetailsCovoiturageComponent) detailsCovoiturageComponent: DetailsCovoiturageComponent;

  constructor(private formBuilder: FormBuilder, private collabServ: CollabServiceService, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.createForms();
  }

  get startingAddress() {
    return this.itineraireForm.get('startingAddress')
  }

  get arrivalAddress() {
    return this.itineraireForm.get('arrivalAddress')
  }

  get immatriculation() {
    return this.vehiculeForm.get('immatriculation');
  }
  get brand() {
    return this.vehiculeForm.get('brand');
  }

  get model() {
    return this.vehiculeForm.get('model');
  }
  get availableSeats() {
    return this.vehiculeForm.get('availableSeats');
  }

  get hour() {
    return this.dateTimeForm.get('hour');
  }

  get date() {
    return this.dateTimeForm.get('date');
  }


  createForms() {
    this.itineraireForm = this.formBuilder.group({
      startingAddress: ['', Validators.required],
      arrivalAddress: ['', Validators.required]
    })

    this.vehiculeForm = this.formBuilder.group({
      immatriculation: [''],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      availableSeats: [
        '',
        [
          Validators.required,
          Validators.max(20),
          Validators.min(1),
          Validators.pattern(/^\d+$/)
        ]
      ]
    });
    this.dateTimeForm = this.formBuilder.group(
      {
        date: ['', Validators.required],
        hour: ['', Validators.required]
      },
      { validator: this.dateTimeValidator.bind(this) }
    );
  }

  dateTimeValidator(control: AbstractControl): { [key: string]: boolean } {
    if (control.get('date').valid && control.get('hour').valid) {
      const dateTime = this.ngbDateToNative(control.value);
      if (dateTime.getTime() <= Date.now()) {
        return { anterior: true };
      }
    }
    return null;
  }

  //Pour le constructeur Date, les mois vont de 0 à 11: une date saisie comme étant le 2018-06-01 ressort avec un mois de plus, d'où le retrait d'un mois dans cette fonction
  ngbDateToNative(dateTime) {
    return new Date(
      dateTime.date.year,
      dateTime.date.month - 1,
      dateTime.date.day,
      dateTime.hour.hour,
      dateTime.hour.minute
    );
  }

  createCarpoolBooking() {
    const newCar = new Car(this.immatriculation.value, this.brand.value, this.model.value, this.availableSeats.value);

    let startDate = this.ngbDateToNative(this.dateTimeForm.value);
    this.carpoolBooking = new CarpoolBooking(null, startDate, null, this.startingAddress.value, this.arrivalAddress.value, null,
      newCar, null, null);

    this.collabServ.createCarpoolBooking(this.carpoolBooking).subscribe();
    this.childModal.show();
  }
}
