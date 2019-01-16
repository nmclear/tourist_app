import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';

import IconBtn from '../Buttons/IconBtn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

const MapIconBar = (props) => {
  const { container } = styles;
  const { visible, onOpenPress, onUserLocationPress } = props;
  return (
    <View
      // style={[container, { display: visible }]}
      style={container}
    >
      <IconBtn
        name={
          Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'
        }
        type="ionicon"
        onPress={() => {}}
        style={{ paddingVertical: 5 }}
      />
      <IconBtn
        name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}
        type="ionicon"
        onPress={onOpenPress}
        style={{ paddingVertical: 5 }}
      />
      <IconBtn
        name={Platform.OS === 'ios' ? 'ios-locate' : 'md-locate'}
        type="ionicon"
        onPress={onUserLocationPress}
        style={{ paddingVertical: 5 }}
      />
    </View>
  );
};

export default MapIconBar;
