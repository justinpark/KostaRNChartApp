import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, BottomNavigation } from 'react-native-material-ui';

import Container from './js/components/ViewContainer';
import withToolbar from './js/components/withToolbar';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'today',
    };
  }
  render() {
    return (
      <Container>
        <View style={styles.contentContainer}>
          <Text style={styles.welcome}>글로벌 SW 강좌</Text>
          <Button raised primary text="Primary" />
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
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
      </Container>
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
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
