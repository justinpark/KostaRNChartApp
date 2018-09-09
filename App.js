import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';

import { Button, Avatar, BottomNavigation, ListItem, Subheader } from 'react-native-material-ui';
import {
  LineChart,
} from 'react-native-chart-kit'

import { createStackNavigator } from 'react-navigation';

import Container from './js/components/ViewContainer';
import AppWithToolbar from './AppWithToolbar';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  static navigationOptions = {
    title: '글로벌 SW 강좌',
  };
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      active: 'today',
      chartData: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
    };
    this.layout = [{
      id: 'layout01',
      type: 'title',
    }, {
      id: 'layout02',
      type: 'chart',
    }, {
      id: 'layout03',
      type: 'button',
    }, {
      id: 'layout04',
      type: 'intro',
    }, {
      id: 'layout05',
      type: 'intro',
    }, {
      id: 'layout06',
      type: 'intro',
    }, {
      id: 'layout07',
      type: 'intro',
    }, {
      id: 'layout08',
      type: 'intro',
    }, {
      id: 'layout09',
      type: 'intro',
    }, {
      id: 'layout10',
      type: 'intro',
    }, {
      id: 'layout11',
      type: 'intro',
    }];
  }
  renderItem({ item }) {
    const { navigation } = this.props;

    if(item.type === 'title') {
      return (
        <Subheader text="비트코인 시세" />
      );
    }

    if (item.type === 'chart') {
      return (
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }]
          }}
          width={Dimensions.get('window').width - 10} // from react-native
          height={Dimensions.get('window').height / 2}
          chartConfig={{
            backgroundColor: '#03a9f4',
            backgroundGradientFrom: '#03a9f4',
            backgroundGradientTo: '#03a9f4',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      );
    }

    if (item.type === 'button') {
      return (
        <Subheader text="매매 현황" />
      );
    }

    if (item.type === 'intro') {
      return (
        <ListItem
          divider
          leftElement={<Avatar text="BCC" />}
          centerElement={{
            primaryText: '비트코인 (BCC/BTC)',
            secondaryText: `${Math.random()}`,
          }}
          rightElement={<Button raised primary text="구매" onPress={() => navigation.navigate('Toolbar')} />}
          onPress={() => {}}
        />
      );
    }

    return null;
  }

  render() {
    return (
      <Container>
        <View style={styles.contentContainer}>
          <FlatList
            data={this.layout}
            keyExtractor={(item) => item.id}
            renderItem={this.renderItem}
          />
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

export default createStackNavigator({
  Home: {
    screen: App,
  },
  Toolbar: {
    screen: AppWithToolbar,
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
