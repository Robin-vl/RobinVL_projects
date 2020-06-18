import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalerijPage } from './galerij.page';

const routes: Routes = [
  {
    path: '',
    component: GalerijPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalerijPageRoutingModule {}
