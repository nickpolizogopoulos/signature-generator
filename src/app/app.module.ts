import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { CompatibilityComponent } from './components/compatibility.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';

import { ExpandWindowComponent } from './components/reusable-components/expand-window.component';
import { CollapseWindowComponent } from './components/reusable-components/collapse-window.component';

import { FirstStyleComponent } from './components/signature-styles/first-style.component';
import { SecondStyleComponent } from './components/signature-styles/second-style.component';
import { ThirdStyleComponent } from './components/signature-styles/third-style.component';
import { FourthStyleComponent } from './components/signature-styles/fourth-style.component';
import { PlaceholderSignatureComponent } from './components/signature-styles/placeholder-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CompatibilityComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ExpandWindowComponent,
    CollapseWindowComponent,
    FirstStyleComponent,
    SecondStyleComponent,
    ThirdStyleComponent,
    FourthStyleComponent,
    PlaceholderSignatureComponent
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
