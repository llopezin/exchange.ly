import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss'],
})
export class ExchangeRateComponent implements OnInit {
  @Input() public rate;
  @Input() public quantity;
  @Output() public removeRateEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeRate(rate) {
    this.removeRateEvent.emit(rate);
  }

  setValue(rateValue) {
    let quantity = this.quantity || 1;
    let value = rateValue * quantity;
    return Math.floor((value + Number.EPSILON) * 100000) / 100000;
  }
}
