import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalerijPageRoutingModule } from './galerij-routing.module';

import { GalerijPage } from './galerij.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalerijPageRoutingModule
  ],
  declarations: [GalerijPage]
})
export class GalerijPageModule {}
