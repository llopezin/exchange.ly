import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EventEmitter } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { getLatestRates } from 'src/app/shared/store/rates-store/actions';

@Component({
  selector: 'app-currency-selector-overlay',
  templateUrl: './currency-selector-overlay.component.html',
  styleUrls: ['./currency-selector-overlay.component.scss'],
})
export class CurrencySelectorOverlayComponent implements OnInit {
  public rates: {};
  public ratesArray: {}[];
  public loading: Boolean = true;
  public base: string = 'GBP';
  public addCurrenciesForm: FormGroup;

  @Output() addCurrenciesEvent = new EventEmitter();

  get ratesFormArray() {
    return this.addCurrenciesForm.controls.orders as FormArray;
  }

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.subscribeToRatesStore();
    this.store.dispatch(getLatestRates({ base: this.base }));
    this.buildAddCurrencyForm();
  }

  subscribeToRatesStore() {
    this.store.select('ratesApp').subscribe((ratesResponse) => {
      this.rates = ratesResponse.rates.rates;
      this.loading = ratesResponse.loading;
      this.createRatesArray();
      this.addCheckboxes();
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
      this.ratesFormArray.push(new FormControl(false));
    }
  }

  getCurrencyName(i) {
    return Object.keys(this.ratesArray[i])[0];
  }

  onSubmit() {
    const checkedCurrencies = this.addCurrenciesForm.value.orders
      .map((checked, i) => (checked ? this.ratesArray[i] : null))
      .filter((v) => v !== null);
    console.log(checkedCurrencies);
    this.addCurrenciesEvent.emit(checkedCurrencies);
  }
}
