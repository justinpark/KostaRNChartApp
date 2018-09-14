import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import BuyCoinScreen from './containers/BuyCoinContainer';

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  BuyModal: {
    screen: BuyCoinScreen,
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#03a9f4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
