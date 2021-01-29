import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricRatesRoutingModule } from './historic-rates-routing.module';
import { HistoricRatesComponent } from './historic-rates.component';

@NgModule({
  declarations: [HistoricRatesComponent],
  imports: [CommonModule, HistoricRatesRoutingModule],
})
export class HistoricRatesModule {}
