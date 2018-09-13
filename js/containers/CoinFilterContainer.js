import { connect } from 'react-redux';

import CoinFilter from '../components/CoinFilter';

const selector = store => store.filter;

export default connect(selector)(CoinFilter);
