import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack'

import reducers from './reducers';
import createReducers from './api-redux-pack/createReducers';
// import setFilterEffect from './middlewares/setFilterEffect';

const apiReducers = createReducers('transactions', 'coins', 'users');

const finalCreateStore = applyMiddleware(
  thunk,
  reduxPackMiddleware,
  // setFilterEffect,
)(createStore);

export default (initState) => {
  return finalCreateStore(combineReducers({ ...reducers, ...apiReducers }), initState);
}
