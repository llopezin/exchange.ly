/* import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchCurrency,
  fetchCurrencyError,
  fetchCurrencySuccess,
} from '../actions/index';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ExchangeRatesService } from 'src/app/shared/services/exchange-rates.service';

@Injectable()
export class UserCurrencyEffects {
  constructor(
    private actions$: Actions,
    private exchangeratesService: ExchangeRatesService
  ) {}

  fetchCurrency$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCurrency),
      mergeMap((action) =>
        this.exchangeratesService.getRates(action.base, action.currencies).pipe(
          map((rates) => fetchCurrencySuccess({ rates: rates })),
          catchError((err) => of(fetchCurrencyError({ payload: err })))
        )
      )
    )
  );
}
 */
