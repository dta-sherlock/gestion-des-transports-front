import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Car from '../models/Car';
import {CarpoolBooking} from '../models/CarpoolBooking';
import {Observable} from 'rxjs/Observable';

const API_BASE_URL = 'http://localhost:8080/';
const URL_RESERVATION = 'carpoolBookings';


@Injectable({
  providedIn: 'root'
})
export class BookingApiService {


  constructor(private http: HttpClient) {
  }




  getReservation() {
    return this.http.get<Array<CarpoolBooking>>(`${API_BASE_URL}${URL_RESERVATION}`);
  }

  reserverCovoiturage(iduser: number , idReservation: number ): Observable<any> {
    return this.http.post(`${API_BASE_URL}${URL_RESERVATION}` , {iduser, idReservation});
  }

}
