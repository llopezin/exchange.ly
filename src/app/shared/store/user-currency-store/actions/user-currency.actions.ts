import { createAction, props } from '@ngrx/store';
import Rates from 'src/app/shared/models/rates.model';

export const addCurrency = createAction(
  '[USER CURRENCY] Add Currency',
  props<{ currencies: string[] }>()
);

export const removeCurrency = createAction(
  '[USER CURRENCY] Remove Currency',
  props<{ currencies: string[] }>()
);

export const changeBase = createAction(
  '[USER CURRENCY] Change Base',
  props<{ base: string }>()
);

//Fetch currency
/* export const fetchCurrency = createAction(
  '[USER CURRENCY] Fetch Currency',
  props<{ currencies: string[]; base: string }>()
);

export const fetchCurrencySuccess = createAction(
  '[USER CURRENCY] Fetch Currency Success',
  props<{ rates: Rates }>()
);

export const fetchCurrencyError = createAction(
  '[USER CURRENCY] Fetch Currency Error',
  props<{ payload: any }>()
); */
