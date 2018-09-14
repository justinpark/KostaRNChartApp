import { connect } from 'react-redux';

import BuyCoinScreen from '../screens/BuyCoinScreen';
import { updatePrice } from '../actions/coinActions';
import { coinApiSelector } from '../selectors/coinSelectors';

const mapStateToProps = (store, { navigation }) => {
  const { entities } = coinApiSelector(store);
  const id = navigation.getParam('id');
  return {
    coin: entities[id],
  };
}

export default connect(mapStateToProps, { updatePrice })(BuyCoinScreen);
