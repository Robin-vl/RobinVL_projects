import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MedewerkerComponent } from './medewerker/medewerker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KlantenComponent } from './klanten/klanten.component';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { ToevoegenmedComponent } from './toevoegenmed/toevoegenmed.component';
import { KlantdetailComponent } from './klantdetail/klantdetail.component';
import { InschrijvingKlantenComponent } from './inschrijving-klanten/inschrijving-klanten.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MedewerkerComponent,
    DashboardComponent,
    KlantenComponent,
    BestellingenComponent,
    ToevoegenmedComponent,
    KlantdetailComponent,
    InschrijvingKlantenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
