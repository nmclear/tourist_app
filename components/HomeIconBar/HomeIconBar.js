import React from 'react';
import {
  Platform, View, Text, StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

const HomeIconBar = (props) => {
  const { container } = styles;
  return (
    <View style={container}>
      <Icon
        name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-restaurant'}
        type="ionicon"
        color="black"
        size={34}
        onPress={() => {}}
      />
      <Icon
        name={Platform.OS === 'ios' ? 'ios-bed' : 'md-bed'}
        type="ionicon"
        color="black"
        size={34}
        onPress={() => {}}
      />
      <Icon
        name={Platform.OS === 'ios' ? 'binoculars' : 'binoculars'}
        type="material-community"
        color="black"
        size={34}
        onPress={() => {}}
      />
      <Icon
        name={Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-horizontal'}
        type="material-community"
        color="black"
        size={34}
        onPress={() => {}}
      />
    </View>
  );
};

export default HomeIconBar;
