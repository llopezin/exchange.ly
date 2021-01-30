import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricRatesRoutingModule } from './historic-rates-routing.module';
import { HistoricRatesComponent } from './historic-rates.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencySelectorOverlayModule } from '../currency-selector-overlay/currency-selector-overlay.module';
import { HitoricRatesChartComponent } from './hitoric-rates-chart/hitoric-rates-chart.component';
import { DateSelectorsComponent } from './date-selectors/date-selectors.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HistoricRatesComponent,
    HitoricRatesChartComponent,
    DateSelectorsComponent,
  ],
  imports: [
    CommonModule,
    HistoricRatesRoutingModule,
    ReactiveFormsModule,
    CurrencySelectorOverlayModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NoopAnimationsModule,
  ],
})
export class HistoricRatesModule {}
