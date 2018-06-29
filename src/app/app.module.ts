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
import { CollabAccueilComponent } from './collab-accueil/collab-accueil.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { ChauffeurAccueilComponent } from './chauffeur-accueil/chauffeur-accueil.component';
import {MenuAdminComponent} from './menu-admin/menu-admin.component';
import {MenuChauffeurComponent} from './menu-chauffeur/menu-chauffeur.component';
import {MenuCollabComponent} from './menu-collab/menu-collab.component';
import {ROUTES} from './app.routes';

import { MenuComponent } from './menu/menu.component';
import {GererVehiculesComponent} from './admin/gerer-vehicules/gerer-vehicules.component';
import {CreerVehiculeComponent} from './admin/creer-vehicule/creer-vehicule.component';
import { ImmatFilterPipe } from './pipes/immat-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    OptionProfilComponent,
    CommonModalComponent,
    CollabAccueilComponent,
    AdminAccueilComponent,
    ChauffeurAccueilComponent,
    MenuAdminComponent,
    MenuChauffeurComponent,
    MenuCollabComponent,
    GererVehiculesComponent,
    CreerVehiculeComponent,
    BrandFilterPipe,
    ImmatFilterPipe,
    MenuComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot()
  ],
  providers: [
    HttpClient,
    MenuComponent,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
