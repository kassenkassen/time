import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  private quoteUrl = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) {}

  getQuote(): Observable<any> {
    return this.http.get(this.quoteUrl);
  }
}
