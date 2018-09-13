import { View } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import ThemedStyleSheet from '../../ThemedStyleSheet';

const propTypes = {
  children: PropTypes.node.isRequired,
};

class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

Container.propTypes = propTypes;

export default Container;

const styles = ThemedStyleSheet.create(() => ({
  container: {
    flex: 1,
  },
}));
