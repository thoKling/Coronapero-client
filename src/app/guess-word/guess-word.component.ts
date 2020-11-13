import { Component, OnInit } from '@angular/core';
import {GuessWordService} from '../shared/guess-word.service';

@Component({
  selector: 'app-guess-word',
  templateUrl: './guess-word.component.html',
  styleUrls: ['./guess-word.component.scss']
})
export class GuessWordComponent implements OnInit {

  constructor(private guessWordService: GuessWordService) { }

  ngOnInit(): void {
  }

  createGame(): void {
   this.guessWordService.createGame().subscribe(data => console.log(data));
  }
}
