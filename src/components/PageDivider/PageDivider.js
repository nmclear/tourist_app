import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#E1E1E1',
    height: 35,
  },
  textStyle: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#717171',
    letterSpacing: 2,
  },
});

const PageDivider = (props) => {
  const { color, text } = props;
  const { container, textStyle } = styles;
  return (
    <View style={container}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

export default PageDivider;
