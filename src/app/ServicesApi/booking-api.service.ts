import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Car from '../models/Car';
import {CarpoolBooking} from '../models/CarpoolBooking';

const API_BASE_URL = 'http://localhost:8080/';
const URL_RESERVATION = 'collaborateur/reservations/';
const CREER = 'creer/'

@Injectable({
  providedIn: 'root'
})
export class BookingApiService {


  constructor(private http: HttpClient) {
  }


  getReservation() {
    return this.http.get<Array<CarpoolBooking>>(`${API_BASE_URL}${URL_RESERVATION}`);
  }


}
