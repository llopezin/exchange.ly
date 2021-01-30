import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExchangeRatesRoutingModule } from './exchange-rates-routing.module';
import { ExchangeRatesComponent } from './exchange-rates.component';
import { CurrencySelectorOverlayComponent } from '../currency-selector-overlay/currency-selector-overlay.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { CurrencyOptionsFormComponent } from './currency-options-form/currency-options-form.component';

@NgModule({
  declarations: [ExchangeRatesComponent, CurrencySelectorOverlayComponent, ExchangeRateComponent, CurrencyOptionsFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ExchangeRatesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ExchangeRatesModule {}
