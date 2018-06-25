import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { OptionProfilComponent } from './modals/option-profil/option-profil.component';
import { CommonModalComponent } from './modals/common-modal/common-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import {GererVehiculesComponent} from "./admin/gerer-vehicules/gerer-vehicules.component";
import {CreerVehiculeComponent} from "./admin/creer-vehicule/creer-vehicule.component";
import { ImmatFilterPipe } from './pipes/immat-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    OptionProfilComponent,
    CommonModalComponent,
    GererVehiculesComponent,
    CreerVehiculeComponent,
    BrandFilterPipe,
    ImmatFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [

    HttpClient

    NgbModule.forRoot()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
