import { createAction, props } from '@ngrx/store';

export const overlayVisible = createAction(
  '[OVERLAY] Visibility Change',
  props<{ visible: boolean }>()
);
