import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuessWordComponent } from './guess-word.component';

const routes: Routes = [
  {
    path: '', component: GuessWordComponent, children: [
      /*{
        path: 'details/:id', component: DetailsComponent
      },*/
      /*{
        path: '', redirectTo: 'list', pathMatch: 'full'
      }*/
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GuessWordRoutingModule { }
