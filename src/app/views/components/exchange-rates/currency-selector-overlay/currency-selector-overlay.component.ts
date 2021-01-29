import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { getLatestRates } from 'src/app/shared/store/rates-store/actions';

@Component({
  selector: 'app-currency-selector-overlay',
  templateUrl: './currency-selector-overlay.component.html',
  styleUrls: ['./currency-selector-overlay.component.sass'],
})
export class CurrencySelectorOverlayComponent implements OnInit {
  public rates: {};
  public loading: Boolean;
  public base: string = 'GBP';
  public addCurrenciesForm: FormGroup;
  public ratesArray: [] = [];

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.addCurrenciesForm = this.formBuilder.group({
      orders: new FormArray([]),
    });
  }

  ngOnInit(): void {
    this.subscribeToRatesStore();
    this.store.dispatch(getLatestRates({ base: this.base }));
  }

  subscribeToRatesStore() {
    this.store.select('ratesApp').subscribe((ratesResponse) => {
      this.rates = ratesResponse.rates.rates;
      this.loading = ratesResponse.loading;
      console.log(this.rates);
    });
  }

  onSubmit() {
    console.log(this.addCurrenciesForm);
  }
}
