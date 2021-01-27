import { Component, OnInit } from '@angular/core';
import Rates from 'src/app/shared/models/rates.model';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Component({
  selector: 'app-historic-rates',
  templateUrl: './historic-rates.component.html',
  styleUrls: ['./historic-rates.component.scss'],
})
export class HistoricRatesComponent implements OnInit {
  public rates: Rates;
  public startDate: string;
  public endDate: string;

  constructor(private exchangeRatesService: ExchangeRatesService) {}

  ngOnInit(): void {
    this.exchangeRatesService
      .getHistoricRates('GBP', ['EUR'], {
        start: '2018-01-01',
        end: '2019-01-01',
      })
      .subscribe((rates) => {
        this.rates = rates;
        console.log(rates);
      });
  }
}
