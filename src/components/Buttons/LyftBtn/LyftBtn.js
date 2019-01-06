import React from 'react';
import { Linking } from 'react-native';
import { LYFT_CLIENT_ID } from 'react-native-dotenv';
import IconBtn from '../IconBtn';

const LYFT_URL = `lyft://ridetype?id=lyft&parter=${LYFT_CLIENT_ID}`;

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
    <IconBtn
      reverse
      raised
      size={30}
      color="#ff00bf"
      name="lyft"
      type="material-community"
      onPress={() => Linking.openURL(link)}
    />
  );
};

export default LyftBtn;
