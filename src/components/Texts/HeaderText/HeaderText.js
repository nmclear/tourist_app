import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import {
  iOSUIKit,
  sanFranciscoWeights,
  iOSColors,
  material,
  robotoWeights,
  materialColors,
} from 'react-native-typography';

const styles = StyleSheet.create({
  defaultStyle: {
    ...Platform.select({
      ios: {
        ...iOSUIKit.title3Object,
        color: iOSColors.black,
      },
      android: {
        ...material.titleObject,
        color: materialColors.blackPrimary,
      },
    }),
  },
  largeStyle: {
    ...Platform.select({
      ios: {
        ...sanFranciscoWeights.heavy,
      },
      android: {
        ...robotoWeights.bold,
      },
    }),
    fontSize: 24,
    letterSpacing: 1,
  },
  smallStyle: {
    ...Platform.select({
      ios: {
        ...sanFranciscoWeights.semibold,
      },
      android: {
        ...robotoWeights.medium,
      },
    }),
    fontSize: 16,
  },
});

const HeaderText = (props) => {
  const { children, style, small } = props;
  const { defaultStyle, smallStyle, largeStyle } = styles;
  const fontStyle = small ? smallStyle : largeStyle;
  return (
    <Text {...props} style={[defaultStyle, fontStyle, style]}>
      {children}
    </Text>
  );
};

export default HeaderText;
