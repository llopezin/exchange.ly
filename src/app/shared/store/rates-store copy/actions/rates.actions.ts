import { createAction, props } from '@ngrx/store';
import Rates from '../../../models/rates.model';

//Get Rates
export const getLatestRates = createAction(
  '[RATES] Get All',
  props<{ base: string }>()
);

export const getLatestRatesSuccess = createAction(
  '[RATES] Get All Success',
  props<{ rates: Rates }>()
);

export const getLatestRatesError = createAction(
  '[RATES] Get All Error',
  props<{ payload: any }>()
);
