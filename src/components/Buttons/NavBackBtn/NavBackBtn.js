import React from 'react';
import { Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 15,
    zIndex: 200,
  },
});

const NavBackBtn = (props) => {
  const { color, onPress } = props;
  const { container } = styles;
  return (
    <TouchableOpacity style={[container]} onPress={onPress}>
      <Icon
        name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
        type="ionicon"
        color={color || 'white'}
        size={30}
      />
    </TouchableOpacity>
  );
};

export default NavBackBtn;
