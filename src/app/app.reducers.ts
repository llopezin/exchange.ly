import { ActionReducerMap } from '@ngrx/store';
import * as ratesReducers from './shared/store/rates-store/reducers';
import * as historicRatesReducers from './shared/store/historic-rates-store/reducers';
import * as userCurrencyreducers from './shared/store/user-currency-store/reducers';
import * as overlayreducers from './shared/store/overlay-store/reducers';

export interface AppState {
  ratesApp: ratesReducers.RatesState;
  historicRatesApp: historicRatesReducers.HistoricRatesState;
  userCurrencyApp: userCurrencyreducers.UserCurrencyState;
  overlayApp: overlayreducers.OverlayState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ratesApp: ratesReducers.ratesReducer,
  historicRatesApp: historicRatesReducers.historicRatesReducer,
  userCurrencyApp: userCurrencyreducers.userCurrencyReducer,
  overlayApp: overlayreducers.overlayReducer,
};
