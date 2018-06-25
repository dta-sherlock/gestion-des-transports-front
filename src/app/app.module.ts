import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ReserverCovoiturageComponent } from './reserver-covoiturage/reserver-covoiturage.component';


@NgModule({
  declarations: [
    AppComponent,
    ReserverCovoiturageComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
