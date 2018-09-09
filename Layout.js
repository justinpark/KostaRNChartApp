import React from 'react';

import { View } from 'react-native';

function Layout(props) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    }}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    </View>
  );
}

export default Layout;
