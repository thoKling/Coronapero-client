import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessWordComponent } from './guess-word.component';
import {GuessWordRoutingModule} from './guess-word-routing.module';



@NgModule({
  declarations: [GuessWordComponent],
  imports: [
    CommonModule,
    GuessWordRoutingModule
  ]
})
export class GuessWordModule { }
