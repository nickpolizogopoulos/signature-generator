import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { CompatibilityComponent } from './components/compatibility.component';
import { SignatureComponent } from './components/signature.component';
import { AboutComponent } from './components/about.component';
import { FirstStyleComponent } from './components/signature-styles/first-style.component';
import { FourthStyleComponent } from './components/signature-styles/fourth-style.component';
import { SecondStyleComponent } from './components/signature-styles/second-style.component';
import { ThirdStyleComponent } from './components/signature-styles/third-style.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignatureComponent,
    AboutComponent,
    CompatibilityComponent,
    FirstStyleComponent,
    SecondStyleComponent,
    ThirdStyleComponent,
    FourthStyleComponent,
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
