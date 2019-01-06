import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  textStyle: {},
});

const IconWithText = (props) => {
  const {
    name, onPress, label, type, color, size, style, labelStyle, raised, reverse,
  } = props;
  const { container, textStyle } = styles;
  return (
    <TouchableOpacity style={[container, style]} onPress={onPress}>
      <Icon
        raised={raised}
        reverse={reverse}
        name={name}
        type={type || 'material'}
        color={color || Colors.iconDefault}
        size={size || 40}
      />
      <Text style={[textStyle, labelStyle || {}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconWithText;
