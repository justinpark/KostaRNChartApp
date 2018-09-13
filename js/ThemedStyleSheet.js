import { StyleSheet } from 'react-native';
import MyTheme from './MyTheme';

const ThemedStyleSheet = {
  theme: MyTheme,
  create(makeStyleFunc) {
    return StyleSheet.create(makeStyleFunc(ThemedStyleSheet.theme));
  }
};

export default ThemedStyleSheet;
