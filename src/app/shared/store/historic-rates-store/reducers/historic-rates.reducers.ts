import { createReducer, on } from '@ngrx/store';
import Rates from 'src/app/shared/models/rates.model';
import {
  getHistoricRates,
  getHistoricRatesSuccess,
  getHistoricRatesError,
} from '../actions/index';

export interface HistoricRatesState {
  historicRates: Rates;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: HistoricRatesState = {
  historicRates: new Rates(),
  loading: false,
  loaded: false,
  error: null,
};

const _historicRatesReducer = createReducer(
  initialState,

  on(getHistoricRates, (state) => ({ ...state, loading: true })),

  on(getHistoricRatesSuccess, (state, { historicRates }) => ({
    ...state,
    loading: false,
    loaded: true,
    historicRates: historicRates,
  })),

  on(getHistoricRatesError, (state, { payload }) => ({
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

export function historicRatesReducer(state, action) {
  return _historicRatesReducer(state, action);
}
