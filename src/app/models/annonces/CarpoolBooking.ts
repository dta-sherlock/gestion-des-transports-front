import {Booking} from './Booking';
import Car from './Car';

export class CarpoolBooking extends Booking {
   startingAddress: string ;
   arrivalAddress: string ;
   availableSeats: number ;
   car: Car;
   passengers: Array<User>;
  
  constructor(id: number, startDate: Date, endDate: Date, startingAddress: string, arrivalAddress: string, availableSeats: number, car: Car, user: User, passengers: Array<User>) {
    super(id, startDate, endDate);
    this.startingAddress = startingAddress;
    this.arrivalAddress = arrivalAddress;
    this.availableSeats = availableSeats;
    this.car = car;
    this.user = user;
    this.passengers = passengers;
  }
}
