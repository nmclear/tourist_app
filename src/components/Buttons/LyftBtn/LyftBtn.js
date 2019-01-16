import React from 'react';
import { Linking } from 'react-native';
import { LYFT_CLIENT_ID } from 'react-native-dotenv';
import { string, number, shape } from 'prop-types';

import FlexIconBtn from '../FlexIconBtn';

const LYFT_URL = `lyft://ridetype?id=lyft&parter=${LYFT_CLIENT_ID}`;

const propTypes = {
  name: string,
  location: shape({
    address: string.isRequired,
    city: string.isRequired,
    state: string.isRequired,
    zipcode: number.isRequired,
    coordinate: shape({
      latitude: number.isRequired,
      longitude: number.isRequired,
    }).isRequired,
  }).isRequired,
};
const defaultProps = {
  name: 'Destination',
};

const LyftBtn = ({ name, location }) => {
  const {
    address, city, state, zipcode, coordinate,
  } = location;
  const { latitude, longitude } = coordinate;
  const fullAddress = `${address} ${city}, ${state}, ${zipcode}`;
  //   const formattedAddress = encodeURIComponent(fullAddress);
  const destination = `destination[latitude]=${latitude}&destination[longitude]=${longitude}`;

  const link = `${LYFT_URL}&${destination}`;

  return (
    <FlexIconBtn
      // color="#ff00bf"
      color="#fff"
      iconColor="#ff00bf"
      name="lyft"
      type="material-community"
      onPress={() => Linking.openURL(link)}
    />
  );
};

LyftBtn.propTypes = propTypes;
LyftBtn.defaultProps = defaultProps;

export default LyftBtn;
