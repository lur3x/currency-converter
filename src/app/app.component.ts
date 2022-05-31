import { Component, enableProdMode, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'currency-converter';
  result!: {};
  usd!: string;
  eur!: string;
  gbp!: string;

  constructor(private currency: CurrencyService) {}
  ngOnInit() {
    this.currency.exchange('UAH', 'USD').subscribe((res) => {
      let arr = Object.values(res);
      this.result = +arr[0] * 1;
      this.usd = this.result.toString();
    });
    this.currency.exchange('UAH', 'EUR').subscribe((res) => {
      let arr = Object.values(res);
      this.result = +arr[0] * 1;
      this.eur = this.result.toString();
    });
    this.currency.exchange('UAH', 'GBP').subscribe((res) => {
      let arr = Object.values(res);
      this.result = +arr[0] * 1;
      this.gbp = this.result.toString();
    });
  }
}
