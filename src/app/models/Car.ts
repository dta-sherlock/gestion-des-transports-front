
export default class Car {
  private _immatriculation: string;
  private _brand: string;
  private _model: string;
  private _availableSeats: number;

  constructor(immatriculation: string, brand: string, model: string, availableSeats: number) {
    this._immatriculation = immatriculation;
    this._brand = brand;
    this._model = model;
    this._availableSeats = availableSeats;
  }

  ennonceVehicule(): string {
    return this.model + '' + this._brand;
  }

  get immatriculation(): string {
    return this._immatriculation;
  }

  set immatriculation(value: string) {
    this._immatriculation = value;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get availableSeats(): number {
    return this._availableSeats;
  }

  set availableSeats(value: number) {
    this._availableSeats = value;
  }
}


