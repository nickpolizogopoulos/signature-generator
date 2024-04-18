import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { NavbarComponent } from './components/navbar.component';
import { AboutComponent } from './components/about.component';
import { CompatibilityComponent } from './components/compatibility.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

import { FirstStyleComponent } from './components/signature-styles/first-style.component';
import { SecondStyleComponent } from './components/signature-styles/second-style.component';
import { ThirdStyleComponent } from './components/signature-styles/third-style.component';
import { FourthStyleComponent } from './components/signature-styles/fourth-style.component';
import { PlaceholderSignatureComponent } from './components/signature-styles/placeholder-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CompatibilityComponent,
    PageNotFoundComponent,
    FirstStyleComponent,
    SecondStyleComponent,
    ThirdStyleComponent,
    FourthStyleComponent,
    PlaceholderSignatureComponent,
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
