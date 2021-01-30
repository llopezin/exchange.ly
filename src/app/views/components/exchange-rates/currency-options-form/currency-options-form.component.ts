import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-currency-options-form',
  templateUrl: './currency-options-form.component.html',
  styleUrls: ['./currency-options-form.component.sass'],
})
export class CurrencyOptionsFormComponent implements OnInit {
  public latestRates: {};
  public currencyOptionsForm: FormGroup;
  public baseSelector: FormControl;
  public quantitySelector: FormControl;
  public base: string;

  @Input() public rates;
  @Output() public baseEvent = new EventEmitter();
  @Output() public quantityEvent = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.subscribeToUserCurrencyStore();
  }

  subscribeToUserCurrencyStore() {
    this.store.select('userCurrencyApp').subscribe(({ base }) => {
      this.base = base;
      this.buildCurrencyOptionsForm();
    });
  }

  buildCurrencyOptionsForm() {
    this.quantitySelector = new FormControl('1', [Validators.min(0)]);
    this.baseSelector = new FormControl(this.base, [Validators.min(0)]);
    this.currencyOptionsForm = this.formBuilder.group({
      baseSelector: this.baseSelector,
      quantitySelector: this.quantitySelector,
    });
  }

  onSubmit() {
    if (this.baseSelector.touched) {
      this.baseEvent.emit(this.baseSelector.value);
    }

    if (this.quantitySelector.touched) {
      this.quantityEvent.emit(this.quantitySelector.value);
    }
  }
}
