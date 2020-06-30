import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedewerkerComponent } from './medewerker/medewerker.component';
import { KlantenComponent } from './klanten/klanten.component';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { ToevoegenmedComponent } from './toevoegenmed/toevoegenmed.component';
import { KlantdetailComponent } from './klantdetail/klantdetail.component';
import { InschrijvingKlantenComponent } from './inschrijving-klanten/inschrijving-klanten.component';


const routes: Routes = [
  {path:"", component: DashboardComponent,pathMatch:'full'},
  {path:'medewerkers/:nieuw',component:ToevoegenmedComponent},
  {path:"medewerkers", component:MedewerkerComponent},
  {path:"klanten", component:KlantenComponent},
  {path:"klanten/:klantnum", component:KlantdetailComponent, pathMatch:'full'},
  {path:"bestellingen",component:BestellingenComponent},
  {path:"inschrijving",component:InschrijvingKlantenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
