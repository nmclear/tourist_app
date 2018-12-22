// import React from 'react';
// import { Linking } from 'react-native';
// import { Button } from 'react-native-elements';

// const OpenTableBtn = ({ link }) => (
//   <Button
//     onPress={() => Linking.openURL(link)}
//     title="Reserve with OpenTable"
//     color="white"
//     icon={{ name: 'opentable', type: 'zocial' }}
//     backgroundColor="#DA3743"
//     buttonStyle={{ marginBottom: 5, marginTop: 5 }}
//     accessibilityLabel="Reserve a Table with OpenTable"
//   />
// );

// export default OpenTableBtn;

import React from 'react';
import {
  Linking, TouchableOpacity, Image, Text,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Button } from 'react-native-elements';

import logo from './opentable_logo.png';

const OpenTableBtn = ({ link }) => (
  <TouchableOpacity
    // onPress={() => Linking.openURL(link)}
    onPress={() => WebBrowser.openBrowserAsync(link)}
    style={{
      backgroundColor: '#DA3743',
      paddingVertical: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 5,
      flexDirection: 'row',
    }}
  >
    <Text style={{ color: 'white', fontSize: 18 }}>Book with </Text>
    <Image source={logo} style={{ height: 30, width: 129 }} />
  </TouchableOpacity>
);

export default OpenTableBtn;
