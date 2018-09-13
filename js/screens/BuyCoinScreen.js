import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ViewContainer from '../components/ViewContainer';
import Text from '../components/Text';

class BuyCoinScreen extends PureComponent {
  render() {
    return (
      <ViewContainer>
        <Text>
          구매화면
        </Text>
      </ViewContainer>
    );
  }
}

BuyCoinScreen.propTypes = {

};

export default BuyCoinScreen;
