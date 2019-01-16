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
        ...sanFranciscoWeights.regular,
        color: iOSColors.black,
      },
      android: {
        ...material.body1Object,
        ...robotoWeights.regular,
        color: materialColors.blackPrimary,
      },
    }),
    fontSize: 16,
  },
});

const BodyText = (props) => {
  const { children, style } = props;
  return (
    <Text {...props} style={[styles.fontStyle, style]}>
      {children}
    </Text>
  );
};

export default BodyText;
