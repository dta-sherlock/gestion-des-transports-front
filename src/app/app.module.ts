import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthErrorInterceptorService } from './interceptors/authentification/auth-error-interceptor.service';
import { OptionProfilComponent } from './modals/option-profil/option-profil.component';
import { CommonModalComponent } from './modals/common-modal/common-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { CollabAccueilComponent } from './collab-accueil/collab-accueil.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { ChauffeurAccueilComponent } from './chauffeur-accueil/chauffeur-accueil.component';
import {MenuAdminComponent} from './menu-admin/menu-admin.component';
import {MenuChauffeurComponent} from './menu-chauffeur/menu-chauffeur.component';
import {MenuCollabComponent} from './menu-collab/menu-collab.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    OptionProfilComponent,
    CommonModalComponent,
    CollabAccueilComponent,
    AdminAccueilComponent,
    ChauffeurAccueilComponent,
    MenuAdminComponent,
    MenuChauffeurComponent,
    MenuCollabComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES)

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
