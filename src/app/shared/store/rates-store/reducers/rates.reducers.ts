import { createReducer, on } from '@ngrx/store';
import Rates from 'src/app/shared/models/rates.model';
import {
  getLatestRates,
  getLatestRatesSuccess,
  getLatestRatesError,
} from '../actions/index';

export interface RatesState {
  rates: Rates;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: RatesState = {
  rates: new Rates(),
  loading: false,
  loaded: false,
  error: null,
};

const _ratesReducer = createReducer(
  initialState,

  on(getLatestRates, (state) => ({ ...state, loading: true })),

  on(getLatestRatesSuccess, (state, { rates }) => ({
    ...state,
    loading: false,
    loaded: true,
    rates: rates,
  })),

  on(getLatestRatesError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
  }))
);

export function ratesReducer(state, action) {
  return _ratesReducer(state, action);
}
