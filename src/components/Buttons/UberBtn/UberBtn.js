import React from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-elements';
import IconBtn from '../IconBtn';

// universal deep link url
// const UBER_URL = 'https://m.uber.com/ul/?action=setPickup';

// native deep link url
const UBER_URL = 'uber://?action=setPickup';

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
  //   const link = `${UBER_URL}&${CLIENT_ID}&${pickup}&${dropoff}`;
  const link = `${UBER_URL}&${pickup}&${dropoff}`;

  // return (
  //   <Button
  //     onPress={() => Linking.openURL(link)}
  //     title="Book a ride with Uber"
  //     color="white"
  //     // icon={{ name: 'uber', type: 'material-community' }}
  //     backgroundColor="black"
  //     buttonStyle={{ marginBottom: 5, marginTop: 5 }}
  //     accessibilityLabel="Book a ride with Uber"
  //   />
  // );
  return (
    <IconBtn
      reverse
      raised
      size={30}
      color="#09091a"
      name="uber"
      type="material-community"
      onPress={() => Linking.openURL(link)}
    />
  );
};

export default UberBtn;
