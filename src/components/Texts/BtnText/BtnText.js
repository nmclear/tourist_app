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
  fontStyle: {
    ...Platform.select({
      ios: {
        ...iOSUIKit.bodyObject,
        ...sanFranciscoWeights.medium,
        color: iOSColors.black,
      },
      android: {
        ...material.body1Object,
        ...robotoWeights.medium,
        color: materialColors.blackPrimary,
      },
    }),
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

const BtnText = (props) => {
  const { children, style, whiteFont } = props;
  const whiteColor = Platform.OS === 'ios' ? iOSColors.white : materialColors.whitePrimary;
  const blackColor = Platform.OS === 'ios' ? iOSColors.black : materialColors.blackPrimary;
  const color = whiteFont ? whiteColor : blackColor;
  return (
    <Text {...props} style={[styles.fontStyle, { color }, style]}>
      {children}
    </Text>
  );
};

export default BtnText;
