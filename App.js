import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import Text from './js/components/Text';
import { BottomNavigation, ListItem, Subheader } from 'react-native-material-ui';
import {
  LineChart,
} from 'react-native-chart-kit'
import ViewContainer from './js/components/ViewContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'today',
    };
    this.coins = [{
      id: 1,
      code: 'BTX',
      name: '비트코인',
      priceFormatted: '30만원',
    }, {
      id: 2,
      code: 'RPX',
      name: '리플',
      priceFormatted: '4백원',
    }, {
      id: 3,
      code: 'ETH',
      name: '이더리움',
      priceFormatted: '6만원',
    }];
  }

  render() {
    return (
      <ViewContainer>
        <ViewContainer>
          <Subheader text="코인 시세" />
          {this.coins.map(({ name, id, priceFormatted }) => (
            <ListItem
              key={`coins_${id}`}
              centerElement={{
                primaryText: name,
              }}
              rightElement={<Text>{priceFormatted}</Text>}
            />
          ))}
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
    );
  }
}

export default App;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});
