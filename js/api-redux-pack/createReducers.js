import { handle } from 'redux-pack';
import {
  INIT,
  FETCH_ALL,
  UPDATE,
  CREATE,
  DELETE,
} from './actionTypes';
import { INIT_TYPE } from '../middlewares/localStorageEffect';

export default (...reducerNames) => {
  return reducerNames.reduce((apiReducers, name) => ({
    ...apiReducers,
    [name]: (state = { loadingEntities: {} }, action) => {
      const { type, payload, meta } = action;
      const { resourceName, id: entityId, key = 'id' } = meta || {};

      if (type === INIT_TYPE) {
        return payload[name] || state;
      }
      if (resourceName !== name) {
        return state;
      }

      switch (type) {
        case INIT: {
          const { data } = payload || {};
          const ids = data.map(entity => entity[key]);
          const entities = data.reduce((finalEntities, entity) => ({
            ...finalEntities,
            [entity[key]]: entity,
          }), {});
          return {
            ...state,
            entities,
            ids,
          };
        }
        case CREATE:
        case UPDATE: {
          const { data: entity } = payload || {};
          const id = payload[key];
          return handle(state, action, {
            start: prevState => ({
              ...prevState,
              loadingEntities: {
                ...prevState.loadingEntities,
                [id]: true,
              },
            }),
            success: prevState => {
              return {
                ...prevState,
                entities: {
                  ...prevState.entities,
                  [entity[key]]: entity,
                },
              };
            },
            finish: prevState => ({
              ...prevState,
              loadingEntities: {
                ...prevState.loadingEntities,
                [entityId]: false,
              },
            }),
          });
        }
        case DELETE: {
          const { data: entity } = payload || {};
          const id = payload[key];
          return handle(state, action, {
            start: prevState => ({
              ...prevState,
              loadingEntities: {
                ...prevState.loadingEntities,
                [id]: true,
              },
            }),
            success: prevState => {
              return {
                ...prevState,
                entities: {
                  ...prevState.entities,
                  [entity[key]]: { deleted: true },
                },
              };
            },
            finish: prevState => ({
              ...prevState,
              loadingEntities: {
                ...prevState.loadingEntities,
                [entity[key]]: false,
              },
            }),
          });
        }
        case FETCH_ALL: {
          const { data = [] } = payload || {};
          console.log('data', data);
          return handle(state, action, {
            start: prevState => ({ ...prevState, isLoading: true }),
            success: prevState => {
              const ids = data.map(entity => entity[key]);
              const entities = data.reduce((finalEntities, entity) => ({
                ...finalEntities,
                [entity[key]]: entity,
              }), {});
              return {
                ...prevState,
                entities,
                ids,
                isLoading: true,
              };
            },
            finish: prevState => ({ ...prevState, isLoading: false }),
          });
        }
        default:
          return state;
      }
    },
  }), {});
}
