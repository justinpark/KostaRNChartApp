import { StyleSheet, Dimensions } from 'react-native';
import MyTheme from './MyTheme';

const ThemedStyleSheet = {
  theme: MyTheme,
  create(makeStyleFunc) {
    return StyleSheet.create(makeStyleFunc({
      ...ThemedStyleSheet.theme,
      ...Dimensions.get('window'),
    }));
  }
};

export default ThemedStyleSheet;
