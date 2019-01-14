import React from 'react';
import { TouchableOpacity, StyleSheet, ViewPropTypes } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  string, func, number, bool,
} from 'prop-types';
import Colors from '../../../constants/Colors';

const propTypes = {
  name: string.isRequired,
  onPress: func.isRequired,
  color: string,
  type: string,
  size: number,
  raised: bool,
  reverse: bool,
  style: ViewPropTypes.style,
};

const defaultProps = {
  color: Colors.tabIconDefault,
  type: 'material',
  size: 30,
  raised: false,
  reverse: false,
  style: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const IconBtn = (props) => {
  const {
    name, type, color, style, onPress, size, raised, reverse,
  } = props;
  const { container } = styles;
  return (
    <TouchableOpacity style={[container, style]} onPress={onPress}>
      <Icon raised={raised} reverse={reverse} name={name} type={type} color={color} size={size} />
    </TouchableOpacity>
  );
};

IconBtn.propTypes = propTypes;
IconBtn.defaultProps = defaultProps;

export default IconBtn;
