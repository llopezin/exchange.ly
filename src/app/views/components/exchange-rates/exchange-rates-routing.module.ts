import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ExchangeRatesComponent } from './exchange-rates.component';

const routes: Routes = [
  {
    path: 'exchange-rates',
    component: LayoutComponent,
    children: [{ path: '', component: ExchangeRatesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeRatesRoutingModule {}
