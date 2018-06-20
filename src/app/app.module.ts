import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { AuthErrorInterceptorService } from './interceptors/authentification/auth-error-interceptor.service';
import { OptionProfilComponent } from './modals/option-profil/option-profil.component';
import { CommonModalComponent } from './modals/common-modal/common-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import {GererVehiculesComponent} from "./admin/gerer-vehicules/gerer-vehicules.component";
import {CreerVehiculeComponent} from "./admin/creer-vehicule/creer-vehicule.component";
import { FilterPipe} from './filter.pipe';
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
    FilterPipe,
    ImmatFilterPipe,
    BrandFilterPipe
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
