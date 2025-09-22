import { Routes } from '@angular/router';

import { Accueil } from './page/accueil/accueil';
import { Liste }   from './page/liste/liste';
import { Gestion } from './page/gestion/gestion';
import { Contact } from './page/contact/contact';
import { Page404 } from './page/page404/page404';

export const routes: Routes = [
  { path: '',        component: Accueil },
  { path: 'liste',   component: Liste },
  { path: 'gestion', component: Gestion },
  { path: 'contact', component: Contact },
  { path: '404', component: Page404 },
  { path: '**', redirectTo: '' }
];
