import { connect } from 'react-redux';

import BuyCoinScreen from '../screens/BuyCoinScreen';
import { updatePrice } from '../actions/coinActions';

export default connect(null, { updatePrice })(BuyCoinScreen);
