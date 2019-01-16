import React from 'react';
import { Linking, Platform } from 'react-native';
import { shape, number, string } from 'prop-types';

import FlexIconBtn from '../FlexIconBtn';

const propTypes = {
  coordinate: shape({
    latitude: number.isRequired,
    longitude: number.isRequired,
  }).isRequired,
  color: string,
  iconColor: string,
};

const defaultProps = {
  color: '#dfe6e9',
  iconColor: '#fff',
};

const MapBtn = ({ coordinate, color, iconColor }) => {
  const { latitude, longitude } = coordinate;

  const link = Platform.select({
    ios: `http://maps.apple.com/maps?daddr=${latitude},${longitude}`,
    android: `http://maps.google.com/maps?daddr=${latitude},${longitude}`,
  });

  return (
    <FlexIconBtn
      color={color}
      iconColor={iconColor}
      name="directions"
      type="material-community"
      onPress={() => Linking.openURL(link)}
    />
  );
};

MapBtn.propTypes = propTypes;
MapBtn.defaultProps = defaultProps;

export default MapBtn;
