import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricRatesRoutingModule } from './historic-rates-routing.module';
import { HistoricRatesComponent } from './historic-rates.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencySelectorOverlayModule } from '../currency-selector-overlay/currency-selector-overlay.module';

@NgModule({
  declarations: [HistoricRatesComponent],
  imports: [
    CommonModule,
    HistoricRatesRoutingModule,
    ReactiveFormsModule,
    CurrencySelectorOverlayModule,
  ],
})
export class HistoricRatesModule {}
