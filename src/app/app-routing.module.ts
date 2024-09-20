import { NgModule } from '@angular/core';
import { 
  ExtraOptions, 
  RouterModule, 
  Routes 
} from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { CompatibilityComponent } from './pages/compatibility.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';

const appTitle:string = 'Signature Generator';

const routes: Routes = [
  {
    path: '',
    title: `${appTitle} - Home`,
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
