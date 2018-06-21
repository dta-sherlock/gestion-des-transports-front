import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthentificationComponent} from './authentification/authentification.component';
import {CollabAccueilComponent} from './collab-accueil/collab-accueil.component';
import {ChauffeurAccueilComponent} from './chauffeur-accueil/chauffeur-accueil.component';
import {AdminAccueilComponent} from './admin-accueil/admin-accueil.component';


export const ROUTES: Routes = [
  { path: '', component: AuthentificationComponent },
  { path: 'collaborateur', component: CollabAccueilComponent },
  { path: 'chauffeur', component: ChauffeurAccueilComponent},
  { path: 'admin', component: AdminAccueilComponent},
];
