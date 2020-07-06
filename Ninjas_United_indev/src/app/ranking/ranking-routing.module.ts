import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingPage } from './ranking.page';

const routes: Routes = [
  {
    path: '',
    component: RankingPage,
    children:[
      {
        path: 'goals',
        loadChildren: () => import('./goals/goals.module').then( m => m.GoalsPageModule)
      },
      {
        path: 'assists',
        loadChildren: () => import('./assists/assists.module').then( m => m.AssistsPageModule)
      },
      {
        path: 'gemgoals',
        loadChildren: () => import('./gemgoals/gemgoals.module').then( m => m.GemgoalsPageModule)
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankingPageRoutingModule {}
