import React, { PureComponent } from 'react';
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';

class LoginScreen extends PureComponent {
  render() {
    return (
      <View>
        <Text>
          로그인해주세요.
        </Text>
      </View>
    );
  }
}

LoginScreen.propTypes = {

};

export default LoginScreen;
