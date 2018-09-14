import { hideMessage } from '../actions/toastActions';
import { KEY, LIFECYCLE } from 'redux-pack';

let _timer;
export default (delay = 1000) => store => next => action => {
  if (!action) return null;
  const result = next(action);

  const { toast, [KEY.LIFECYCLE]: status, [KEY.TRANSACTION]: key } = action.meta || {};

  if (toast && (status === LIFECYCLE.SUCCESS || status === LIFECYCLE.FAILURE)) {
    if (_timer) {
      clearTimeout(_timer);
    }
    _timer = setTimeout(() => store.dispatch(hideMessage(key)), delay);
  }

  return result;
}
