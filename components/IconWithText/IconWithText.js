import React from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
  },
  textStyle: {},
});

const IconWithText = (props) => {
  const {
    name, onPress, label, type, color, style,
  } = props;
  const { container, textStyle } = styles;
  return (
    <TouchableOpacity style={[container, style]} onPress={onPress}>
      <Icon name={name} type={type || 'material'} color={color} size={40} />
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconWithText;
