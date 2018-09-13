import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Subheader } from 'react-native-material-ui';

import ViewContainer from '../components/ViewContainer';
import CoinTableContainer from '../containers/CoinTableContainer';

class HomeScreen extends PureComponent {
  render() {
    return (
      <ViewContainer>
        <Subheader text="코인 시세" />
        <CoinTableContainer />
      </ViewContainer>
    );
  }
}

HomeScreen.propTypes = {

};

export default HomeScreen;
