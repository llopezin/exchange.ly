import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import Rates from 'src/app/shared/models/rates.model';
import { getHistoricRates } from 'src/app/shared/store/historic-rates-store/actions';

@Component({
  selector: 'app-historic-rates',
  templateUrl: './historic-rates.component.html',
  styleUrls: ['./historic-rates.component.scss'],
})
export class HistoricRatesComponent implements OnInit {
  public loading: Boolean;
  public rates: Rates;
  public startDate: string = '2018-01-01';
  public endDate: string = '2019-01-01';
  public dates = { start: this.startDate, end: this.endDate };
  public base: string = 'GBP';
  public symbols: string[] = ['EUR'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscribeToRatesStore();
    this.subscribeToHistoricRatesStore();

    this.store.dispatch(
      getHistoricRates({
        base: this.base,
        symbols: this.symbols,
        dates: this.dates,
      })
    );
  }

  subscribeToHistoricRatesStore() {
    this.store.select('historicRatesApp').subscribe((ratesResponse) => {
      this.rates = ratesResponse.historicRates;
      this.loading = ratesResponse.loading;
    });
  }

  subscribeToRatesStore() {
    this.store.select('ratesApp').subscribe((ratesResponse) => {
      console.log(ratesResponse.rates);
    });
  }
}
