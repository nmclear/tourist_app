import React from 'react';

import { Linking, Platform } from 'react-native';

import IconBtn from '../IconBtn';

const MapBtn = ({ coordinate, color }) => {
  const { latitude, longitude } = coordinate;

  const mapLink = Platform.select({
    ios: `http://maps.apple.com/maps?daddr=${latitude},${longitude}`,
    android: `http://maps.google.com/maps?daddr=${latitude},${longitude}`,
  });

  return (
    <IconBtn
      name="directions"
      type="material-community"
      size={30}
      raised
      reverse
      color={color}
      onPress={() => Linking.openURL(mapLink)}
    />
  );
};

export default MapBtn;
