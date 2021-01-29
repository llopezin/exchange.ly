import { ActionReducerMap } from '@ngrx/store';
import * as ratesReducers from './shared/store/rates-store/reducers';
import * as historicRatesReducers from './shared/store/historic-rates-store/reducers';

export interface AppState {
  ratesApp: ratesReducers.RatesState;
  historicRatesApp: historicRatesReducers.HistoricRatesState;
  //usersApp: userReducers.UsersState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ratesApp: ratesReducers.ratesReducer,
  historicRatesApp: historicRatesReducers.historicRatesReducer,
  //usersApp: userReducers.usersReducer,
};
