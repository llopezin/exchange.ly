import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logging } from 'protractor';
import { AppState } from 'src/app/app.reducers';
import Rates from 'src/app/shared/models/rates.model';
import { overlayVisible } from 'src/app/shared/store/overlay-store/actions';
import { getLatestRates } from 'src/app/shared/store/rates-store/actions';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent implements OnInit {
  public loading: Boolean;
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
    this.subscribeToOverlayStore();
    this.subscribeToRatesStore();
    this.subscribeToUserCurrencyStore();
    this.getLatestRates();
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
      this.createRatesArray();
      this.displaySelectedCurrencyRates();
    });
  }

  subscribeToUserCurrencyStore() {
    this.store.select('userCurrencyApp').subscribe((currencyResponse) => {
      this.selectedCurrencies = currencyResponse.userCurrency;
    });
  }

  displaySelectedCurrencyRates() {
    this.displayedRates = this.latestRatesArray.filter((rate) => {
      let currencyName = Object.keys(rate)[0];

      return this.selectedCurrencies.includes(currencyName);
    });
  }

  createRatesArray() {
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
