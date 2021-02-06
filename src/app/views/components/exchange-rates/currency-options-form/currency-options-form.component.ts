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
  styleUrls: ['./currency-options-form.component.scss'],
})
export class CurrencyOptionsFormComponent implements OnInit {
  public latestRates: {};
  public currencyOptionsForm: FormGroup;
  public baseSelector: FormControl;
  public quantitySelector: FormControl;
  public base: string;
  public quantity: string = '1';

  @Input() public rates;
  @Output() public formChange = new EventEmitter();

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
      this.baseSelector.setValue(this.base);
    });
  }

  buildCurrencyOptionsForm() {
    this.quantitySelector = new FormControl(this.quantity, [Validators.min(0)]);
    this.baseSelector = new FormControl(this.base, [Validators.min(0)]);
    this.currencyOptionsForm = this.formBuilder.group({
      baseSelector: this.baseSelector,
      quantitySelector: this.quantitySelector,
    });

    this.currencyOptionsForm.controls['baseSelector'].setValue(this.base, {
      onlySelf: true,
    });
  }

  onSubmit() {
    if (this.quantitySelector.touched || this.baseSelector.touched) {
      this.base = this.baseSelector.value;
      this.quantity = this.quantitySelector.value;

      this.formChange.emit({
        base: this.base,
        quantity: this.quantity,
      });
    }
  }
}
