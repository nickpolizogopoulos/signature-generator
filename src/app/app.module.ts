import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { CompatibilityComponent } from './pages/compatibility.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';

import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';

import { ExpandWindowComponent } from './components/reusable-components/expand-window.component';
import { CollapseWindowComponent } from './components/reusable-components/collapse-window.component';

import { FirstStyleComponent } from './components/signatures/first-style.component';
import { SecondStyleComponent } from './components/signatures/second-style.component';
import { ThirdStyleComponent } from './components/signatures/third-style.component';
import { FourthStyleComponent } from './components/signatures/fourth-style.component';
import { PlaceholderSignatureComponent } from './components/signatures/placeholder-home.component';


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
