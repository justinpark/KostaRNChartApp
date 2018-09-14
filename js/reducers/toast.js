import { handle, KEY } from 'redux-pack';
import { HIDE_TOAST_MESSAGE } from '../actions/toastActionTypes';

const initialState = {
  visible: false,
  success: false,
  message: '',
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  const { toast, [KEY.TRANSACTION]: key } = action.meta || {};
  if (toast) {
    return handle(state, action, {
      success: prevState => ({
        ...prevState,
        visible: true,
        success: true,
        message: toast.onSuccess,
      }),
      failure: prevState => ({
        ...prevState,
        visible: true,
        success: false,
        message: toast.onError,
      }),
    });
  } else if (type === HIDE_TOAST_MESSAGE) {
    return {
      ...state,
      visible: false,
    };
  }
  return state;
}
