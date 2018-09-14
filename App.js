import React, {Component} from 'react';
import {
  LineChart,
} from 'react-native-chart-kit'

import { Provider } from 'react-redux';

import createStore from './js/configureStore';
import ViewContainer from './js/components/ViewContainer';
import Entry from './js/Entry';

import NavigationService from './js/NavigationService';

class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <ViewContainer>
          <Entry
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </ViewContainer>
      </Provider>
    );
  }
}

export default App;
