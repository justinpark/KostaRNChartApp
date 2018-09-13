import React from 'react';
import { Text as NativeText } from 'react-native';
import ThemedStyleSheet from '../../ThemedStyleSheet';

const Text = ({ large, small, children }) => (
  <NativeText
    style={[
      styles.default,
      large && styles.large,
      small && styles.small,
    ]}
  >
    {children}
  </NativeText>
);

export default Text;

const styles = ThemedStyleSheet.create(({ size, color }) => ({
  default: {
    color: color.text,
    fontSize: size.md,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
  },
}));
