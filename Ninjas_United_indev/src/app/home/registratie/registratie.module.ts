import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistratiePageRoutingModule } from './registratie-routing.module';

import { RegistratiePage } from './registratie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistratiePageRoutingModule
  ],
  declarations: [RegistratiePage]
})
export class RegistratiePageModule {}
