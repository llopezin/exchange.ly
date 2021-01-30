import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/components/layout/header/header.component';
import { FooterComponent } from './views/components/layout/footer/footer.component';
import { LayoutComponent } from './views/components/layout/layout.component';
import { ExchangeRatesModule } from './views/components/exchange-rates/exchange-rates.module';
import { HistoricRatesModule } from './views/components/historic-rates/historic-rates.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducers';
import { RatesEffectsArray } from './shared/store/rates-store/effects';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HistoricRatesEffectsArray } from './shared/store/historic-rates-store/effects';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/exchange-rates',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
    HttpClientModule,
    ReactiveFormsModule,

    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([...RatesEffectsArray, ...HistoricRatesEffectsArray]),

    ExchangeRatesModule,
    HistoricRatesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
