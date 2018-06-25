import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthErrorInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 404) {
          alert("User non trouvé");
        }
        else {
          alert("Erreur");
        }

        return Observable.throw(errorResponse);
      }));
  }
}