import { HIDE_TOAST_MESSAGE } from '../actions/toastActionTypes';

export function hideMessage(key) {
  return {
    type: HIDE_TOAST_MESSAGE,
    payload: { key },
  };
}
