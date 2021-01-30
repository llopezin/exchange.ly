import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  public defaultBase: string = 'GBP';

  @Input() public rates;
  @Output() public baseEvent = new EventEmitter();
  @Output() public quantityEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildCurrencyOptionsForm();
  }

  buildCurrencyOptionsForm() {
    this.quantitySelector = new FormControl('1', [Validators.min(0)]);
    this.baseSelector = new FormControl(this.defaultBase, [Validators.min(0)]);
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
