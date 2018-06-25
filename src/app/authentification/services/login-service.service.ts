import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_BASE_URL, URL_LOGIN, URL_GET_USER } from '../../constantes/urls';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  corsPreRequest() {
    return this.http.options(`${API_BASE_URL}${URL_LOGIN}`);
  }

  login(username: string, password: string): Promise<any> {

    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    this.http.post<Response>(`${API_BASE_URL}${URL_LOGIN}`, body).subscribe();
    return this.http.get(`${API_BASE_URL}${URL_GET_USER}`).toPromise();
  }
}
