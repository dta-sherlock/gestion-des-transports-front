import { Injectable } from '@angular/core';
import { User } from '../../models/user/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_BASE_URL, URL_LOGIN } from '../../constantes/urls';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  sendUser(user: User): Promise<User> {
    return this.http.post<User>(`${API_BASE_URL}${URL_LOGIN}`, user, httpOptions).toPromise();
  }
}
