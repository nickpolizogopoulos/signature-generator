import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about.component';
import { CompatibilityComponent } from './components/compatibility.component';
import { PasswordResetComponent } from './components/pass-reset.component';
import { SignatureComponent } from './components/signature.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signature',
    pathMatch: 'full'
  },
  {
    path: 'signature',
    component: SignatureComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'compatibility',
    component: CompatibilityComponent
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent
  },
  { 
    path: '**',
    redirectTo: '404'
  },
  { 
    path: '404',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
