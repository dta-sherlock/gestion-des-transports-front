import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OptionProfilComponent } from './modals/option-profil/option-profil.component';
import { CommonModalComponent } from './modals/common-modal/common-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { AuthErrorInterceptorService } from './authentification/interceptors/authentification/auth-error-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    OptionProfilComponent,
    CommonModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
