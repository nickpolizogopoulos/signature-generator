import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { PasswordResetComponent } from './components/pass-reset.component';
import { CompatibilityComponent } from './components/compatibility.component';
import { SignatureComponent } from './components/signature.component';
import { AboutComponent } from './components/about.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PasswordResetComponent,
    CompatibilityComponent,
    SignatureComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
