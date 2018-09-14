import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack'
import logger from 'redux-logger'
import { AsyncStorage } from 'react-native';
// import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import createReducers from './api-redux-pack/createReducers';
// import setFilterEffect from './middlewares/setFilterEffect';
import hideToastMessageEffect from './middlewares/hideToastMessageEffect';
import localStorageEffect, { CACHE_KEY, INIT_TYPE } from './middlewares/localStorageEffect';

const apiReducers = createReducers('transactions', 'coins', 'users');

const finalCreateStore = applyMiddleware(
  thunk,
  reduxPackMiddleware,
  hideToastMessageEffect(1000),
  // setFilterEffect,
  localStorageEffect,
  logger,
)(createStore);

export default (initState) => {
  const store = finalCreateStore(combineReducers({ ...reducers, ...apiReducers }), initState);

  AsyncStorage.getItem(CACHE_KEY).then((value) => {
    if (value !== null) {
      try {
        const payload = JSON.parse(value);
        store.dispatch({
          type: INIT_TYPE,
          payload,
        });
      } catch(error) {
        console.log('error', error);
      }
    }
  });
  return store;
}
