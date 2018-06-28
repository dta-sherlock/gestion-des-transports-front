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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StartingAddressFilterPipe} from './pipes/starting-address-filter.pipe';
import {ArrivalAddressFilterPipe} from './pipes/arrival-address-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReserverCovoiturageComponent,
    ModalConfirmationComponent,
    StartingAddressFilterPipe,
    ArrivalAddressFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
