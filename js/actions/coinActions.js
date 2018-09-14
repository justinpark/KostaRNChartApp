import createActions from '../api-redux-pack/createActions';
import selectorAction from 'selector-action';

import { coinApiSelector } from '../selectors/coinSelectors';

export const {
  init,
  fetch,
  fetchAll,
  remove,
  update,
  create,
} = createActions('coins');

export const fetchCoins = () => fetchAll({
  meta: {
    toast: {
      onSuccess: '데이터를 가져왔습니다',
    },
  },
});

export const updatePrice = (id, price) => selectorAction(
  coinApiSelector,
  ({ entities }) => update(id, {
    data: {
      ...entities[id],
      currentValue: Number(price),
    },
    meta: {
      toast: {
        onSuccess: '수정되었습니다',
        onError: '문제가 발생했습니다',
      },
    },
  }),
);
