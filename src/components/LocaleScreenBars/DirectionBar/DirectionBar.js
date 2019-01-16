import React from 'react';
import { View, StyleSheet } from 'react-native';
import UberBtn from '../../Buttons/UberBtn';
import LyftBtn from '../../Buttons/LyftBtn';
import MapBtn from '../../Buttons/MapBtn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

const LocationBar = ({ name, location }) => {
  const { container } = styles;
  const { coordinate } = location;
  return (
    <View style={container}>
      <UberBtn name={name} location={location} />
      <MapBtn coordinate={coordinate} color="#fff" iconColor="#1fbad6" />
      <LyftBtn name={name} location={location} />
    </View>
  );
};

export default LocationBar;
