import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../models/user/User';
import { API_BASE_URL, URL_LOGIN } from '../../constantes/urls';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  corsPreRequest() {
    return this.http.options(`${API_BASE_URL}${URL_LOGIN}`);
  }

  login(username: string, password: string): Observable<User> {
    let credentials = {
      username,
      password
    }

    this.corsPreRequest().subscribe(data => console.log(data));
    return this.http.post<User>(`${API_BASE_URL}${URL_LOGIN}`, credentials); /*new Promise(resolve => {
      setTimeout(() => resolve(new User(user.email, user.password, "ADMIN")), 1000);
    });*/
  }
}
