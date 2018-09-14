import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';

import AppMain from './AppMain';
import LoginScreen from './screens/LoginScreen';

export default createSwitchNavigator({
  Main: {
    screen: AppMain,
  },
  Login: {
    screen: LoginScreen,
  },
}, {
  initialRouteName: 'Main',
  mode: 'modal',
  headerMode: 'none',
});
