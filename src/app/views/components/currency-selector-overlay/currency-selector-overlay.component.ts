import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { overlayVisible } from 'src/app/shared/store/overlay-store/actions';
import { addCurrency } from 'src/app/shared/store/user-currency-store/actions';

@Component({
  selector: 'app-currency-selector-overlay',
  templateUrl: './currency-selector-overlay.component.html',
  styleUrls: ['./currency-selector-overlay.component.scss'],
})
export class CurrencySelectorOverlayComponent implements OnInit {
  public rates: {};
  public ratesArray: {}[];
  public loading: Boolean = true;
  public base: string;
  public addCurrenciesForm: FormGroup;
  public selectedCurrencies: string[];

  get ratesFormArray() {
    return this.addCurrenciesForm.controls.orders as FormArray;
  }

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.subscribeToUserCurrencyStore();
    this.subscribeToRatesStore();
  }

  subscribeToRatesStore() {
    this.store.select('ratesApp').subscribe((ratesResponse) => {
      this.rates = ratesResponse.rates.rates;
      this.loading = ratesResponse.loading;
      this.buildAddCurrencyForm();
      this.createRatesArray();
      this.addCheckboxes();
    });
  }

  subscribeToUserCurrencyStore() {
    this.store.select('userCurrencyApp').subscribe(({ userCurrency }) => {
      this.selectedCurrencies = userCurrency;
    });
  }

  buildAddCurrencyForm() {
    this.addCurrenciesForm = this.formBuilder.group({
      orders: new FormArray([]),
    });
  }

  createRatesArray() {
    const rates = [];

    for (let rate in this.rates) {
      const rateObj = {};

      rateObj[rate] = this.rates[rate];
      rates.push(rateObj);
    }

    this.ratesArray = rates;
  }

  addCheckboxes() {
    for (let rate in this.rates) {
      this.selectedCurrencies.includes(rate)
        ? this.ratesFormArray.push(new FormControl(true))
        : this.ratesFormArray.push(new FormControl(false));
    }
  }

  getCurrencyName(i) {
    return Object.keys(this.ratesArray[i])[0];
  }

  onSubmit() {
    this.addSelected();
    this.hideOverlay();
  }

  addSelected() {
    const checkedCurrencies = this.addCurrenciesForm.value.orders
      .map((checked, i) => (checked ? this.getCurrencyName(i) : null))
      .filter((rate) => rate !== null);

    this.store.dispatch(addCurrency({ currencies: checkedCurrencies }));
  }

  hideOverlay() {
    this.store.dispatch(overlayVisible({ visible: false }));
  }
}
