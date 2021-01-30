import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExchangeRatesRoutingModule } from './exchange-rates-routing.module';
import { ExchangeRatesComponent } from './exchange-rates.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { CurrencyOptionsFormComponent } from './currency-options-form/currency-options-form.component';
import { CurrencySelectorOverlayComponent } from '../currency-selector-overlay/currency-selector-overlay.component';
import { CurrencySelectorOverlayModule } from '../currency-selector-overlay/currency-selector-overlay.module';

@NgModule({
  declarations: [
    ExchangeRatesComponent,
    CurrencyOptionsFormComponent,
    ExchangeRatesComponent,
    ExchangeRateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ExchangeRatesRoutingModule,
    ReactiveFormsModule,
    CurrencySelectorOverlayModule,
  ],
})
export class ExchangeRatesModule {}
