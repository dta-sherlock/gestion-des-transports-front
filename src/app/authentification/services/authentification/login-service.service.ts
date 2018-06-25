import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../../models/user/User';
import { API_BASE_URL, URL_LOGIN } from '../../../constantes/urls';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  });

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    let credentials = {
      username,
      password
    }

    /*const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});*/

    /*this.http.get(`${API_BASE_URL}${URL_LOGIN}`, { headers: headers }).subscribe(response => {

      if (response['name']) {
        console.log("true")
      } else {
        console.log("false")
      }
    });*/
    
    return this.http.post<User>(`${API_BASE_URL}${URL_LOGIN}`, credentials); /*new Promise(resolve => {
      setTimeout(() => resolve(new User(user.email, user.password, "ADMIN")), 1000);
    });*/
  }
}
