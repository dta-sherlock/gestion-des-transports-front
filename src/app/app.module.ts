import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CreerAnnonceComponent } from './collaborateur/creer-annonce/creer-annonce.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { DetailsCovoiturageComponent } from './collaborateur/details-covoiturage/details-covoiturage.component';
import { CommonModalComponent } from './modals/common-modal/common-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { CollabServiceService } from './collaborateur/services/collab-service.service';



@NgModule({
  declarations: [
    AppComponent,
    CreerAnnonceComponent,
    DetailsCovoiturageComponent,
    CommonModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    HttpClient, 
    CollabServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
