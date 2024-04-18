import { NgModule } from '@angular/core';
import { 
  ExtraOptions, 
  RouterModule, 
  Routes 
} from '@angular/router';

import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { CompatibilityComponent } from './components/compatibility.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const appTitle:string = 'Signature Generator Application';

const routes: Routes = [
  {
    path: '',
    title: `${appTitle}`,
    component: HomeComponent
  },
  {
    path: 'about',
    title: `${appTitle} - About`,
    component: AboutComponent
  },
  {
    path: 'compatibility',
    title: `${appTitle} - Compatibility`,
    component: CompatibilityComponent
  },
  { 
    path: '**',
    redirectTo: '404'
  },
  { 
    path: '404',
    title: `${appTitle} - 404`,
    component: PageNotFoundComponent
  },
];

const extraOptions:ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, extraOptions)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
