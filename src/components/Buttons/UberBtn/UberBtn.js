import React from 'react';
import { Linking } from 'react-native';
import { UBER_CLIENT_ID } from 'react-native-dotenv';
import { string, number, shape } from 'prop-types';
import FlexIconBtn from '../FlexIconBtn';

// native deep link url
const UBER_URL = `uber://?action=setPickup&${UBER_CLIENT_ID}`;

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

const UberBtn = ({ name, location }) => {
  const {
    address, city, state, zipcode, coordinate,
  } = location;
  const { latitude, longitude } = coordinate;
  const fullAddress = `${address} ${city}, ${state}, ${zipcode}`;
  //   const formattedAddress = encodeURIComponent(fullAddress);
  const formattedAddress = fullAddress;
  const pickup = 'pickup=my_location';
  const dropoff = `dropoff[nickname]=${name}&dropoff[formatted_address]=${formattedAddress}&dropoff[latitude]=${latitude}&dropoff[longitude]=${longitude}`;

  const link = `${UBER_URL}&${pickup}&${dropoff}`;

  return (
    <FlexIconBtn
      // color="#09091a"
      color="#fff"
      iconColor="#09091a"
      name="uber"
      type="material-community"
      onPress={() => Linking.openURL(link)}
    />
  );
};

UberBtn.propTypes = propTypes;
UberBtn.defaultProps = defaultProps;

export default UberBtn;
