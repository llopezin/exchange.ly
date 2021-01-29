import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getHistoricRates,
  getHistoricRatesSuccess,
  getHistoricRatesError,
} from '../actions/index';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Injectable()
export class HistoricRatesEffects {
  constructor(
    private actions$: Actions,
    private exchangeratesService: ExchangeRatesService
  ) {}

  getHistorictRates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHistoricRates),
      mergeMap((action) =>
        this.exchangeratesService
          .getHistoricRates(action.base, action.symbols, action.dates)
          .pipe(
            map((historicRates) =>
              getHistoricRatesSuccess({ historicRates: historicRates })
            ),
            catchError((err) => of(getHistoricRatesError({ payload: err })))
          )
      )
    )
  );
}
