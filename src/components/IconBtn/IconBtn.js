import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeIconBar = (props) => {
  const {
    name, type, color, style, onPress, size,
  } = props;
  const { container } = styles;
  return (
    <TouchableOpacity style={[container, style]} onPress={onPress}>
      <Icon
        name={name}
        type={type || 'material'}
        color={color || Colors.tabIconDefault}
        size={size || 30}
      />
    </TouchableOpacity>
  );
};

export default HomeIconBar;
