import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent implements OnInit {
  public overlayVisible: Boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  showOverlay() {
    this.overlayVisible = true;
  }

  hideOverlay() {
    this.overlayVisible = false;
  }
}
