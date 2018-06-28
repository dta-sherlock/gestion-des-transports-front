import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReserverCovoiturageComponent } from './booking/reserver-covoiturage.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';

import {ModalModule} from 'ngx-bootstrap';
import { ModalConfirmationComponent } from './modal-confirmation/modal-confirmation.component';
import {HttpClientModule} from '@angular/common/http';
import {Moment, MomentBuiltinFormat} from 'moment';


@NgModule({
  declarations: [
    AppComponent,
    ReserverCovoiturageComponent,
    ModalConfirmationComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
