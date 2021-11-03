import { Component, OnInit } from '@angular/core';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  quote = '';
  constructor(private welcomeService: WelcomeService) {}

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote() {
    this.welcomeService
      .getQuote()
      .subscribe((quote) => (this.quote = quote.slip.advice));
  }
}
