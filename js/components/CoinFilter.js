import React, { PureComponent } from 'react';
import { View, Picker } from 'react-native';
import Text from './Text';
import ThemedStyleSheet from '../ThemedStyleSheet';

import PropTypes from 'prop-types';

class CoinFilter extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.type}</Text>
        <Picker
          selectedValue="java"
          style={styles.filter}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

CoinFilter.propTypes = {

};

export default CoinFilter;

const styles = ThemedStyleSheet.create(() => ({
  container: {
    height: 50,
  },
  filter: {
    flex: 1,
  },
}));

