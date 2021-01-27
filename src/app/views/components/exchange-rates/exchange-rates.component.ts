import { Component, OnInit } from '@angular/core';
import Rates from 'src/app/shared/models/rates.model';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent implements OnInit {
  public rates: Rates;

  constructor(private exchangeRatesService: ExchangeRatesService) {}

  ngOnInit(): void {
    this.exchangeRatesService.getAllLatestRates('GBP').subscribe((rates) => {
      this.rates = rates;
      console.log(rates);
    });
  }
}
