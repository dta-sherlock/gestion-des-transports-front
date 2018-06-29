import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_BASE_URL, URL_LOGIN, URL_GET_USER, URL_LOGOUT } from '../../constantes/urls';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  corsPreRequest() {
    return this.http.options(`${API_BASE_URL}${URL_LOGIN}`);
  }

  async login(username: string, password: string): Promise<any> {

    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    await this.http.post<Response>(`${API_BASE_URL}${URL_LOGIN}`, body).subscribe();

    return this.getUser();
  }

  getUser(): Promise<any> {
    return this.http.get(`${API_BASE_URL}${URL_GET_USER}`, { withCredentials: true }).toPromise();
  }

  logout() {
    this.http.get(`${API_BASE_URL}${URL_LOGIN}${URL_LOGOUT}`, { withCredentials: true }).subscribe();
  }
}