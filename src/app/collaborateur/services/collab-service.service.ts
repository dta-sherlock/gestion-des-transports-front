import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Annonce} from '../../models/annonces/Annonce';

const API_BASE_URL = 'http://localhost:8080/';
const URL_ANNONCES = 'collaborateur/annonces/';
const CREER = 'creer/'

@Injectable({
  providedIn: 'root'
})
export class CollabServiceService {

  constructor(private http: HttpClient) { }

  createAnnonce(annonce: Annonce){
    return this.http.post<Array<Annonce>>(`${API_BASE_URL}${URL_ANNONCES}${CREER}`, annonce);

  }
}
