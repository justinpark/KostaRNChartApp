import { AsyncStorage } from 'react-native';
export const CACHE_KEY = '@MyCoinApp:key';
export const INIT_TYPE = '@@localstorage-init-type';

export default store => next => action => {
  if (!action) return null;
  const result = next(action);

  try {
    const data = JSON.stringify(store.getState());
    AsyncStorage.setItem(CACHE_KEY, data);
  } catch (error) {
    // Error saving data
    console.log('error', error);
  }
  return result;
}
