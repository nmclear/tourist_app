import React from 'react';
import {
  Text, TouchableOpacity, StyleSheet, ViewPropTypes,
} from 'react-native';
import { Icon } from 'react-native-elements';
import {
  string, func, number, bool,
} from 'prop-types';
import Colors from '../../../constants/Colors';

const propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  onPress: func.isRequired,
  color: string,
  type: string,
  size: number,
  raised: bool,
  reverse: bool,
  labelStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {
  color: Colors.iconDefault,
  type: 'material',
  size: 40,
  raised: false,
  reverse: false,
  labelStyle: {},
  style: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 5,
  },
});

const IconTextBtn = (props) => {
  const {
    name, onPress, label, type, color, size, style, labelStyle, raised, reverse,
  } = props;
  const { container } = styles;
  return (
    <TouchableOpacity style={[container, style]} onPress={onPress}>
      <Icon raised={raised} reverse={reverse} name={name} type={type} color={color} size={size} />
      <Text style={[{ textAlign: 'center' }, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

IconTextBtn.propTypes = propTypes;
IconTextBtn.defaultProps = defaultProps;

export default IconTextBtn;
