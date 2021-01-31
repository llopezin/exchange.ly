import { createAction, props } from '@ngrx/store';
import Rates from 'src/app/shared/models/rates.model';

export const addCurrency = createAction(
  '[USER CURRENCY] Add Currency',
  props<{ currencies: string[] }>()
);

export const removeCurrency = createAction(
  '[USER CURRENCY] Remove Currency',
  props<{ currency: string }>()
);

export const changeBase = createAction(
  '[USER CURRENCY] Change Base',
  props<{ base: string }>()
);
