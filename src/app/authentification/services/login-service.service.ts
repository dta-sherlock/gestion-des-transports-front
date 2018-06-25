import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post<User>(`${API_BASE_URL}${URL_LOGIN}`, body);
  }
}
