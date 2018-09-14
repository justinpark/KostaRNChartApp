import { handle, KEY } from 'redux-pack';
import { HIDE_TOAST_MESSAGE } from '../actions/toastActionTypes';

const initialState = {
  visible: false,
  success: false,
  message: '',
  stack: {},
  messageList: [],
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
        messageList: [
          ...prevState.messageList,
          key,
        ],
        stack: {
          ...prevState.stack,
          [key]: message,
        },
      }),
      failure: prevState => ({
        ...prevState,
        visible: true,
        success: false,
        message: toast.onError,
      }),
    });
  } else if (type === HIDE_TOAST_MESSAGE) {
    const { [payload.key]: dump, ...newStack } = state.stack;
    return {
      ...state,
      visible: false,
      stack: newStack,
    };
  }
  return state;
}
