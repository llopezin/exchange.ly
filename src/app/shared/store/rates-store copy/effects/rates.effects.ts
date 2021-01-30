import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getLatestRates,
  getLatestRatesSuccess,
  getLatestRatesError,
} from '../actions/index';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Injectable()
export class RatesEffects {
  constructor(
    private actions$: Actions,
    private exchangeratesService: ExchangeRatesService
  ) {}

  getLatestRates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLatestRates),
      mergeMap((action) =>
        this.exchangeratesService.getLatestRates(action.base).pipe(
          map((rates) => getLatestRatesSuccess({ rates: rates })),
          catchError((err) => of(getLatestRatesError({ payload: err })))
        )
      )
    )
  );
}
