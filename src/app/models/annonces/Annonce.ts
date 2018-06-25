import CarpoolCar from './CarpoolCar';

export class Annonce {
  startingAddress: string;
  arrivalAddress: string;
  travelTime: string;
  distance: number;
  carpoolCar: CarpoolCar;
  placesAvailable: number;
  travelDate: string;


  constructor(startingAddress: string, arrivalAddress: string, travelTime: string, distance: number,
              carpoolCar: CarpoolCar, placesAvailable: number, travelDate: string) {
    this.startingAddress = startingAddress;
    this.arrivalAddress = arrivalAddress;
    this.travelTime = travelTime;
    this.distance = distance;
    this.carpoolCar = carpoolCar;
    this.placesAvailable = placesAvailable;
    this.travelDate = travelDate;

  }

}
