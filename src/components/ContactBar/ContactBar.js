import React from 'react';

import {
  View, Linking, Platform, StyleSheet,
} from 'react-native';
import { WebBrowser } from 'expo';

import IconTextBtn from '../Buttons/IconTextBtn';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
    height: 65,
  },
  rightBorder: {
    borderRightColor: Colors.iconDefault,
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
  borderHeightAdjust: {
    marginVertical: 9,
  },
});

const ContactBar = (props) => {
  const { phone, website, coordinate } = props;
  const { latitude, longitude } = coordinate;
  const { container, rightBorder, borderHeightAdjust } = styles;

  const mapLink = Platform.select({
    ios: `http://maps.apple.com/maps?daddr=${latitude},${longitude}`,
    android: `http://maps.google.com/maps?daddr=${latitude},${longitude}`,
  });
  return (
    <View style={container}>
      <IconTextBtn
        name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
        type="ionicon"
        label="CALL"
        labelStyle={{ fontSize: 12 }}
        size={28}
        color={Colors.attentionColor}
        style={[rightBorder, borderHeightAdjust]}
        onPress={() => Linking.openURL(`tel:+1${phone}`)}
      />
      <IconTextBtn
        name={Platform.OS === 'ios' ? 'ios-laptop' : 'md-laptop'}
        type="ionicon"
        label="WEBSITE"
        labelStyle={{ fontSize: 12 }}
        size={28}
        color={Colors.attentionColor}
        style={[rightBorder, borderHeightAdjust]}
        onPress={() => WebBrowser.openBrowserAsync(website)}
      />
      <IconTextBtn
        name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
        type="ionicon"
        label="DIRECTIONS"
        labelStyle={{ fontSize: 12 }}
        size={28}
        color={Colors.attentionColor}
        style={[rightBorder, borderHeightAdjust]}
        onPress={() => Linking.openURL(mapLink)}
      />
      <IconTextBtn
        name="taxi"
        type="material-community"
        label="UBER"
        labelStyle={{ fontSize: 12 }}
        size={28}
        color={Colors.attentionColor}
        style={borderHeightAdjust}
        onPress={() => {}}
      />
    </View>
  );
};

export default ContactBar;
