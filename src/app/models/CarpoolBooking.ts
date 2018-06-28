import {Booking} from './Booking';
import Car from './Car';
import {LocaleData} from 'ngx-bootstrap';

export class CarpoolBooking extends Booking {
  private _startingAddress: string ;
  private _arrivalAddress: string ;
  private _availableSeats: number ;
  private _car: Car;
  private _passengers: Array<User>;


  constructor(id: number, startDate: string, endDate: Date, user: User, startingAddress: string, arrivalAddress: string, availableSeats: number, car: Car, passengers: Array<User>) {
    super(id, startDate, endDate, user);
    this._startingAddress = startingAddress;
    this._arrivalAddress = arrivalAddress;
    this._availableSeats = availableSeats;
    this._car = car;
    this._passengers = passengers;
  }

  get startingAddress(): string {
    return this._startingAddress;
  }

  set startingAddress(value: string) {
    this._startingAddress = value;
  }

  get arrivalAddress(): string {
    return this._arrivalAddress;
  }

  set arrivalAddress(value: string) {
    this._arrivalAddress = value;
  }

  get availableSeats(): number {
    return this._availableSeats;
  }

  set availableSeats(value: number) {
    this._availableSeats = value;
  }

  get car(): Car {
    return this._car;
  }

  set car(value: Car) {
    this._car = value;
  }

  get passengers(): Array<User> {
    return this._passengers;
  }

  set passengers(value: Array<User>) {
    this._passengers = value;
  }
}
