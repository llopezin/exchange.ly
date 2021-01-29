import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import Rates from 'src/app/shared/models/rates.model';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';
import { getLatestRates } from 'src/app/shared/store/rates-store/actions/index';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent implements OnInit {
  public rates: Rates;
  public loading: Boolean;
  public base: string = 'GBP';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getLatestRates({ base: this.base }));
    this.subscribeToRatesStore();
  }

  subscribeToRatesStore() {
    this.store.select('ratesApp').subscribe((ratesResponse) => {
      this.rates = ratesResponse.rates;
      this.loading = ratesResponse.loading;
    });
  }
}
