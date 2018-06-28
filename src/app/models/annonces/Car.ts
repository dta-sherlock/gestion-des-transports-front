export default class Car {
  immatriculation: string;
  brand: string;
  model: string;
  availableSeats: number;

  constructor(immatriculation: string, brand: string, model: string, availableSeats: number) {
    this.immatriculation = immatriculation;
    this.brand = brand;
    this.model = model;
    this.availableSeats = availableSeats;
  }
}
