import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'guessWord', loadChildren: () => import('./guess-word/guess-word.module').then(m => m.GuessWordModule)},

  { path: '**', redirectTo: 'guessWord' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
