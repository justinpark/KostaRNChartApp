import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import reducers from './reducers';

export default (initialState) => createStore(
  combineReducers(reducers),
  initialState,
);
