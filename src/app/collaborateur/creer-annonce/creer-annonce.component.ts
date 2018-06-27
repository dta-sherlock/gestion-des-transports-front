import { Component, OnInit } from '@angular/core';
import Car from '../../models/annonces/Car';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarpoolBooking} from '../../models/annonces/CarpoolBooking';

@Component({
  selector: 'app-creer-annonce',
  templateUrl: './creer-annonce.component.html',
  styleUrls: ['./creer-annonce.component.css']
})
export class CreerAnnonceComponent implements OnInit {

  carpoolCar: Car;
  vehiculeForm: FormGroup;
  dateTimeForm: FormGroup;

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
    ngbDateToNative(dateTime) {
    return new Date(
      dateTime.date.year,
      dateTime.date.month,
      dateTime.date.day,
      dateTime.hour.hour,
      dateTime.hour.minute
    );
  }

   createCarpoolBooking(){
    const newBooking = new CarpoolBooking(
      this.immatriculation.value,
      this.brand.value,
      this.model.value,
      this.availableSeats.value,
      this.hour.value,
      this.date.value,
      this.carpoolCar.immatriculation.value,
    )
  }
}
