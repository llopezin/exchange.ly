import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HistoricRatesComponent } from './historic-rates.component';

const routes: Routes = [
  {
    path: 'historic-rates',
    component: LayoutComponent,
    children: [{ path: '', component: HistoricRatesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricRatesRoutingModule {}
