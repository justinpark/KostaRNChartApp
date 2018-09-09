import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import withToolbar from './js/components/withToolbar';

class AppWithToolbar extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>메뉴바가 있는 화면</Text>
      </View>
    );
  }
}

// export default withToolbar(AppWithToolbar);
export default AppWithToolbar;
