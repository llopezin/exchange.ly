import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import Rates from 'src/app/shared/models/rates.model';
import { getHistoricRates } from 'src/app/shared/store/historic-rates-store/actions';
import { overlayVisible } from 'src/app/shared/store/overlay-store/actions';
import { getLatestRates } from 'src/app/shared/store/rates-store/actions';

@Component({
  selector: 'app-historic-rates',
  templateUrl: './historic-rates.component.html',
  styleUrls: ['./historic-rates.component.scss'],
})
export class HistoricRatesComponent implements OnInit {
  public loading: Boolean = true;
  public overlayVisible: Boolean;
  public rates: Rates;
  public latestRates: {};
  public base: string = 'GBP';
  public selectedCurrencies: string[];
  public dates: { start: string; end: string };

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.initStorageSubscriptions();
  }

  initStorageSubscriptions() {
    this.subscribeToRatesStore();
    this.subscribeToUserCurrencyStore();
    this.subscribeToHistoricRatesStore();
    this.subscribeToOverlayStore();
  }

  subscribeToHistoricRatesStore() {
    this.store.select('historicRatesApp').subscribe((ratesResponse) => {
      this.rates = ratesResponse.historicRates;
      this.loading = ratesResponse.loading;
      console.log(this.rates);
    });
  }

  subscribeToRatesStore() {
    this.store.select('ratesApp').subscribe((ratesResponse) => {
      this.latestRates = ratesResponse.rates;
    });
  }

  subscribeToOverlayStore() {
    this.store.select('overlayApp').subscribe((overlayResponse) => {
      this.overlayVisible = overlayResponse.visible;
    });
  }

  subscribeToUserCurrencyStore() {
    this.store.select('userCurrencyApp').subscribe(({ userCurrency, base }) => {
      this.selectedCurrencies = userCurrency;
      this.base = base;
      if (this.ratesIsEmpty()) this.getLatestRates();
      if (this.dates) this.getHistoricRates();
    });
  }

  getHistoricRates() {
    this.store.dispatch(
      getHistoricRates({
        base: this.base,
        symbols: this.selectedCurrencies,
        dates: this.dates,
      })
    );
  }

  getLatestRates() {
    this.store.dispatch(getLatestRates({ base: this.base }));
  }

  onDatesChange(dates) {
    this.dates = dates;
    this.getHistoricRates();
  }

  showOverlay() {
    this.store.dispatch(overlayVisible({ visible: true }));
  }

  ratesIsEmpty() {
    return Object.keys(this.latestRates).length === 0;
  }
}
