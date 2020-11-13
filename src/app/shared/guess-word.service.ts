import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuessWordService {

  private url = {
    createGame: '/'
  };

  constructor(private httpClient: HttpClient) { }

  createGame(): Observable<Object>{
    return this.httpClient.get(this.url.createGame);
  }
}
