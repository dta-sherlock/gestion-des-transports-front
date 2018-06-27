import {Injectable} from '@angular/core';
import CompanyCar from '../../models/vehicules/CompanyCar';
import {HttpClient} from '@angular/common/http';

const API_BASE_URL: string = 'http://localhost:8080/';
const URL_VEHICULES: string = 'admin/vehicules/';
const CREER: string = 'creer/'

@Injectable({
  providedIn: 'root'
})
export class AdminServices {

  constructor(private http : HttpClient) {
  }

  getVehicules() {
    return this.http.get<Array<CompanyCar>>(`${API_BASE_URL}${URL_VEHICULES}`);
  }

  publishVehicule(vehicule: CompanyCar){
    return this.http.post<Array<CompanyCar>>(`${API_BASE_URL}${URL_VEHICULES}${CREER}`, vehicule);

  }

}
