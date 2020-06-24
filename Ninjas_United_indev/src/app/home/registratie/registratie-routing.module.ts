import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistratiePage } from './registratie.page';

const routes: Routes = [
  {
    path: '',
    component: RegistratiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistratiePageRoutingModule {}
