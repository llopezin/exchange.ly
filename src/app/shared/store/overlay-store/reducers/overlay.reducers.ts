import { createReducer, on } from '@ngrx/store';
import { overlayVisible } from '../actions/index';

export interface OverlayState {
  visible: boolean;
}

export const initialState: OverlayState = {
  visible: false,
};

const _overlayReducer = createReducer(
  initialState,

  on(overlayVisible, (state, { visible }) => ({
    ...state,
    visible: visible,
  }))
);

export function overlayReducer(state, action) {
  return _overlayReducer(state, action);
}
