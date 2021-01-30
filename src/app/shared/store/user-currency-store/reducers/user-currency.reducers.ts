import { createReducer, on } from '@ngrx/store';
import { addCurrency, removeCurrency, changeBase } from '../actions/index';

export interface UserCurrencyState {
  base: string;
  userCurrency: string[];
}

export const initialState: UserCurrencyState = {
  base: 'GBP',
  userCurrency: ['EUR', 'USD', 'SGD'],
};

const _userCurrencyReducer = createReducer(
  initialState,

  on(addCurrency, (state, { currencies }) => {
    return {
      ...state,
      userCurrency: currencies,
    };
  }),

  on(removeCurrency, (state, { currency }) => ({
    ...state,
    userCurrency: state.userCurrency.filter(
      (currencyName) => currencyName !== currency
    ),
  })),

  on(changeBase, (state, { base }) => ({
    ...state,
    base: base,
  }))
);

export function userCurrencyReducer(state, action) {
  return _userCurrencyReducer(state, action);
}
