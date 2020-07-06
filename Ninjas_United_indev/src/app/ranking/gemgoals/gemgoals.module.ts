import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemgoalsPageRoutingModule } from './gemgoals-routing.module';

import { GemgoalsPage } from './gemgoals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemgoalsPageRoutingModule
  ],
  declarations: [GemgoalsPage]
})
export class GemgoalsPageModule {}
