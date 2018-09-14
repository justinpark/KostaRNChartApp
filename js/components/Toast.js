import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card } from 'react-native-material-ui';
import Text from './Text';

import ThemedStyleSheet from '../ThemedStyleSheet';

class Toast extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
    this.hide = this.hide.bind(this);
  }

  componentDidUpdate({ visible: newVisible }) {
    if (this.props.visible !== newVisible) {
      this.setState({ visible: true });
      this._tid = setTimeout(this.hide, 1000);
    }
  }

  hide() {
    this.setState({ visible: false });
  }
  render() {
    const { message } = this.props;
    const { visible } = this.state;
    return (
      <View style={{...styles.container, ...(!visible && styles.hide)}}>
        <View style={styles.toast}>
          <Card>
            <View style={styles.padder}>
              <Text>{message}</Text>
            </View>
          </Card>
        </View>
      </View>
    );
  }
}

Toast.propTypes = {

};

export default Toast;

const styles = ThemedStyleSheet.create(({ height, width }) => ({
  hide: {
    opacity: 0,
  },
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: height - 200,
  },
  toast: {
    height: 50,
    width,
  },
  padder: {
    padding: 10,
  },
}));
