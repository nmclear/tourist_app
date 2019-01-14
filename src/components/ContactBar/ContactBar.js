// import React from 'react';

// import {
//   View, Linking, Platform, StyleSheet,
// } from 'react-native';
// import { WebBrowser } from 'expo';

// import IconTextBtn from '../Buttons/IconTextBtn';
// import Colors from '../../constants/Colors';

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#f4f4f4',
//     // height: 45,
//   },
//   rightBorder: {
//     borderRightColor: Colors.iconDefault,
//     borderRightWidth: 1,
//     borderStyle: 'solid',
//   },
//   // borderHeightAdjust: {
//   //   marginVertical: 9,
//   // },
// });

// const ContactBar = (props) => {
//   const { phone, website } = props;
//   const { container, rightBorder, borderHeightAdjust } = styles;

//   return (
//     <View style={container}>
//       <IconTextBtn
// name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
// type="ionicon"
//         label="CALL"
//         labelStyle={{ fontSize: 12 }}
//         size={28}
//         // raised
//         // reverse
//         color={Colors.attentionColor}
//         style={[rightBorder, borderHeightAdjust]}
//         onPress={() => Linking.openURL(`tel:+1${phone}`)}
//       />
//       <IconTextBtn
//         name={Platform.OS === 'ios' ? 'ios-laptop' : 'md-laptop'}
//         type="ionicon"
//         label="WEBSITE"
//         labelStyle={{ fontSize: 12 }}
//         size={28}
//         // raised
//         // reverse
//         color={Colors.attentionColor}
//         style={[rightBorder, borderHeightAdjust]}
//         onPress={() => WebBrowser.openBrowserAsync(website)}
//       />
//     </View>
//   );
// };

// export default ContactBar;

import React from 'react';

import {
  View, Linking, Platform, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Icon } from 'react-native-elements';

import IconTextBtn from '../Buttons/IconTextBtn';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
    // height: 45,
  },
  rightBorder: {
    borderRightColor: 'black',
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
  boxStyle: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 16,
    letterSpacing: 2,
  },
});

const ContactBar = (props) => {
  const { phone, website } = props;
  const {
    container, rightBorder, boxStyle, textStyle,
  } = styles;

  return (
    <View style={container}>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:+1${phone}`)} style={[boxStyle]}>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
          type="ionicon"
          containerStyle={{ marginRight: 10 }}
          size={22}
        />
        <Text style={textStyle}>CALL</Text>
      </TouchableOpacity>
      <View style={rightBorder} />
      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(website)} style={boxStyle}>
        <Icon
          name={Platform.OS === 'ios' ? 'ios-laptop' : 'md-laptop'}
          type="ionicon"
          containerStyle={{ marginRight: 10 }}
          size={22}
        />
        <Text style={textStyle}>WEBSITE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactBar;
