import {Routes} from '@angular/router';
import {AppComponent} from './app.component';

import {ReserverCovoiturageComponent} from './reserver-covoiturage/reserver-covoiturage.component';


export const ROUTES: Routes = [
  {path : 'reservation/creer/', component: ReserverCovoiturageComponent}
];
