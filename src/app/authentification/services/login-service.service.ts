import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { API_BASE_URL, URL_LOGIN, URL_GET_USER } from '../../constantes/urls';


const httpOptions = {
  headers: new HttpHeaders({
    'Cookie':  ''
  })
};

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

    let headersPost = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })


    this.http.post<Response>(`${API_BASE_URL}${URL_LOGIN}`, body, { observe: 'response', headers: headersPost } ).subscribe(
      resp => {
       // httpOptions.headers.set('Cookie',resp.headers.get('Set-Cookie'));

        for (let header of resp.headers.keys()) {
          console.log("header:"+header);
        }
      }
    );
    return new Promise(()=>console.log("plus tard"));
  }
}
