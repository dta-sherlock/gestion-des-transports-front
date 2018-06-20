import {Injectable} from '@angular/core';
import Vehicules from "../../models/vehicules/vehicules";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

const API_BASE_URL: string = 'http://localhost:3000/';
const URL_VEHICULES: string = 'admin/vehicules/';
const CREER: string = 'creer/'

@Injectable({
  providedIn: 'root'
})
export class AdminServices {

  constructor(private http : HttpClient) {
  }

  getVehicules() {
    return this.http.get<Array<Vehicules>>(`${API_BASE_URL}${URL_VEHICULES}`);
  }

  publishVehicule(vehicule : Vehicules){
    return this.http.post<Array<Vehicules>>(`${API_BASE_URL}${URL_VEHICULES}${CREER}`, vehicule);
  }

}
