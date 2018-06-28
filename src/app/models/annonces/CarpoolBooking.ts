import {Booking} from './Booking';
import Car from './Car';
import {LocaleData} from 'ngx-bootstrap';
import {Duration} from 'ngx-bootstrap/chronos/duration/constructor';

export class CarpoolBooking extends Booking {
  private _startingAddress: string ;
  private _arrivalAddress: string ;
  private _availableSeats: number ;
  private _car: Car;
  private _user: User;
  private _passengers: Array<User>;
  
  constructor(id: number, startDate: Date, endDate: Date, startingAddress: string, arrivalAddress: string, availableSeats: number, car: Car, user: User, passengers: Array<User>) {
    super(id, startDate, endDate);
    this._startingAddress = startingAddress;
    this._arrivalAddress = arrivalAddress;
    this._availableSeats = availableSeats;
    this._car = car;
    this._user = user;
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

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get passengers(): Array<User> {
    return this._passengers;
  }

  set passengers(value: Array<User>) {
    this._passengers = value;
  }
}
