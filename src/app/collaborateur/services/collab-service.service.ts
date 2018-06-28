import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarpoolBooking } from '../../models/annonces/CarpoolBooking';

const API_BASE_URL = 'http://localhost:8080/';
const URL_ANNONCES = 'collaborateur/annonces/';
const CREER = 'creer/'

@Injectable()
export class CollabServiceService {

  constructor(private http: HttpClient) { }

  createCarpoolBooking(carpoolBooking: CarpoolBooking) {
    return this.http.post(`${API_BASE_URL}${URL_ANNONCES}${CREER}`, carpoolBooking);
  }
}
