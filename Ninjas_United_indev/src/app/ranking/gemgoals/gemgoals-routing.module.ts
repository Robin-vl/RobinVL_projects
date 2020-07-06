import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GemgoalsPage } from './gemgoals.page';

const routes: Routes = [
  {
    path: '',
    component: GemgoalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GemgoalsPageRoutingModule {}
