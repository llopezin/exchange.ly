import { createReducer, on } from '@ngrx/store';
import { addCurrency, removeCurrency, changeBase } from '../actions/index';

export interface UserCurrencyState {
  base: string;
  userCurrency: string[];
}

export const initialState: UserCurrencyState = {
  base: '',
  userCurrency: [],
};

const _userCurrencyReducer = createReducer(
  initialState,

  on(addCurrency, (state, { currencies }) => {
    return {
      ...state,
      userCurrency: currencies,
    };
  }),

  on(removeCurrency, (state, { currencies }) => ({
    ...state,
    userCurrency: state.userCurrency.filter(
      (currency) => !currencies.includes(currency)
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
