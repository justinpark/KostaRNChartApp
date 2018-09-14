import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Subheader, Card, BottomNavigation } from 'react-native-material-ui';

import CoinTableContainer from '../containers/CoinTableContainer';
import NavigationProvider from '../NavigationProvider';
import Text from '../components/Text';
import ViewContainer from '../components/ViewContainer';
import Toast from '../containers/ToastContainer';

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: 'today',
    };
  }
  render() {
    const { navigation } = this.props;
    return (
      <NavigationProvider navigation={navigation}>
        <ViewContainer>
          <ViewContainer>
            <Subheader text="코인 시세" />
            <CoinTableContainer />
            <Toast />
          </ViewContainer>
          <BottomNavigation active={this.state.active} hidden={false} >
            <BottomNavigation.Action
              key="today"
              icon="today"
              label="거래소"
              onPress={() => this.setState({ active: 'today' })}
            />
            <BottomNavigation.Action
              key="bookmark-border"
              icon="bookmark-border"
              label="입출금"
              onPress={() => this.setState({ active: 'bookmark-border' })}
            />
            <BottomNavigation.Action
              key="settings"
              icon="settings"
              label="설정"
              onPress={() => this.setState({ active: 'settings' })}
            />
          </BottomNavigation>
        </ViewContainer>
      </NavigationProvider>
    );
  }
}

HomeScreen.propTypes = {

};

export default HomeScreen;
