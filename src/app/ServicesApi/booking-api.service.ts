import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarpoolBooking } from '../models/CarpoolBooking';

const API_BASE_URL = 'http://localhost:8080/';
const URL_RESERVATION = 'carpoolBookings/';
const URL_ADD_USER_TO_BOOKING = 'addUserToBooking';


@Injectable({
  providedIn: 'root'
})
export class BookingApiService {


  constructor(private http: HttpClient) {
  }




  getReservation() {
    return this.http.get<Array<CarpoolBooking>>(`${API_BASE_URL}${URL_RESERVATION}`);
  }

  reserverCovoiturage(iduser: number , idReservation: number ) {
    return this.http.post<Array<number>>(`${API_BASE_URL}${URL_RESERVATION}${URL_ADD_USER_TO_BOOKING}`, [iduser, idReservation]);
  }

}
