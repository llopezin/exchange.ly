import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExchangeRatesRoutingModule } from './exchange-rates-routing.module';
import { ExchangeRatesComponent } from './exchange-rates.component';
import { CurrencySelectorOverlayComponent } from '../currency-selector-overlay/currency-selector-overlay.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExchangeRatesComponent, CurrencySelectorOverlayComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ExchangeRatesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ExchangeRatesModule {}
