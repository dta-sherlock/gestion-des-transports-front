import { Component, OnInit } from '@angular/core';
import CarpoolCar from '../../models/annonces/CarpoolCar';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Annonce} from '../../models/annonces/Annonce';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.css']
})
export class CreerAnnonceComponent implements OnInit {

  carpoolCar: CarpoolCar;
  vehiculeForm: FormGroup;
  dateTimeForm: FormGroup;
  annonce: Annonce;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForms();
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
  get placesAvailable() {
    return this.vehiculeForm.get('placesAvailable');
  }

  get hour() {
    return this.dateTimeForm.get('hour');
  }

  get date() {
    return this.dateTimeForm.get('date');
  }
  createForms() {
    this.vehiculeForm = this.formBuilder.group({
      immatriculation: [''],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      placesAvailable: [
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
    ngbDateToNative(dateTime) {
    return new Date(
      dateTime.date.year,
      dateTime.date.month,
      dateTime.date.day,
      dateTime.heure.hour,
      dateTime.heure.minute
    );
  }

  createAnnonce(){
    const newAnnonce = new Annonce(
      this.immatriculation.value,
      this
    )
  }
}
