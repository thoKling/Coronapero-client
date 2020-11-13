import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessWordComponent } from './guess-word.component';
import { GuessWordRoutingModule } from './guess-word-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [GuessWordComponent],
  imports: [
    CommonModule,
    GuessWordRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class GuessWordModule { }
