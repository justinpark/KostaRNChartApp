import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View} from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import ViewContainer from './ViewContainer';

const propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default withToolbar = (WrappedScreen) => {
  const WithToolbar = (props) => (
    <ViewContainer>
      <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.goBack()}
      />
      <View style={styles.container}>
        <WrappedScreen {...props} />
      </View>
    </ViewContainer>
  );

  WithToolbar.propTypes = propTypes;

  return WithToolbar;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flex: 1,
  },
});
