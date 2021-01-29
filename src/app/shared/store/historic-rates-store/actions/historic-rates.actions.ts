import { createAction, props } from '@ngrx/store';
import Rates from '../../../models/rates.model';

//Get Historic Rates
export const getHistoricRates = createAction(
  '[RATES] Get Historic Rates',
  props<{
    base: string;
    symbols: string[];
    dates: { start: string; end: string };
  }>()
);

export const getHistoricRatesSuccess = createAction(
  '[RATES] Get Historic Rates Success',
  props<{ historicRates: Rates }>()
);

export const getHistoricRatesError = createAction(
  '[RATES] Get Historic Rates Error',
  props<{ payload: any }>()
);
