import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReserverCovoiturageComponent } from './reserver-covoiturage/reserver-covoiturage.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { CommonModalComponent } from './common-modal/common-modal.component';
import { OptionConfirmationComponent } from './option-confirmation/option-confirmation.component';
import {ModalModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ReserverCovoiturageComponent,
    CommonModalComponent,
    OptionConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
