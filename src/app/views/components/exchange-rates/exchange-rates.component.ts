import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { overlayVisible } from 'src/app/shared/store/overlay-store/actions';
import { getLatestRates } from 'src/app/shared/store/rates-store/actions';
import { addCurrency } from 'src/app/shared/store/user-currency-store/actions';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent implements OnInit {
  public loading: Boolean = true;
  public overlayVisible: Boolean;
  public defaultBase: string = 'GBP';
  public base: string = this.defaultBase;
  public latestRates: {};
  public latestRatesArray: {}[];
  public defaultCurrencies: string[] = ['EUR', 'USD', 'SGD'];
  public selectedCurrencies: string[] = this.defaultCurrencies;
  public displayedRates: {}[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.setUserCurrencies();
    this.initStorageSubscriptions();
    this.getLatestRates();
  }

  setUserCurrencies() {
    this.store.dispatch(addCurrency({ currencies: this.selectedCurrencies }));
  }

  initStorageSubscriptions() {
    this.subscribeToOverlayStore();
    this.subscribeToRatesStore();
    this.subscribeToUserCurrencyStore();
  }

  subscribeToOverlayStore() {
    this.store.select('overlayApp').subscribe((overlayResponse) => {
      this.overlayVisible = overlayResponse.visible;
    });
  }

  subscribeToRatesStore() {
    this.store.select('ratesApp').subscribe((ratesResponse) => {
      this.latestRates = ratesResponse.rates.rates;
      this.loading = ratesResponse.loading;
      this.renderRates();
    });
  }

  subscribeToUserCurrencyStore() {
    this.store.select('userCurrencyApp').subscribe((currencyResponse) => {
      this.selectedCurrencies = currencyResponse.userCurrency;
      this.renderRates();
    });
  }

  renderRates() {
    this.setRatesArray();
    this.displaySelectedCurrencyRates();
  }

  displaySelectedCurrencyRates() {
    this.displayedRates = this.latestRatesArray.filter((rate) => {
      let currencyName = Object.keys(rate)[0];

      return this.selectedCurrencies.includes(currencyName);
    });
  }

  setRatesArray() {
    const rates = [];

    for (let rate in this.latestRates) {
      const rateObj = {};
      rateObj[rate] = this.latestRates[rate];
      rates.push(rateObj);
    }

    this.latestRatesArray = rates;
  }

  getLatestRates() {
    this.store.dispatch(getLatestRates({ base: this.base }));
  }

  showOverlay() {
    this.store.dispatch(overlayVisible({ visible: true }));
  }

  hideOverlay() {
    this.store.dispatch(overlayVisible({ visible: false }));
  }
}
