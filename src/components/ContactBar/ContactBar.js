import React from 'react';

import {
  View, Linking, Platform, StyleSheet,
} from 'react-native';
import IconTextBtn from '../Buttons/IconTextBtn';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const ContactBar = (props) => {
  const { phone, website, coordinates } = props;
  const { latitude, longitude } = coordinates;
  const { container } = styles;

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
        onPress={() => Linking.openURL(`tel:+1${phone}`)}
      />
      <IconTextBtn
        name={Platform.OS === 'ios' ? 'ios-laptop' : 'md-laptop'}
        type="ionicon"
        label="WEBSITE"
        labelStyle={{ fontSize: 12 }}
        size={28}
        onPress={() => Linking.openURL(website)}
      />
      <IconTextBtn
        name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
        type="ionicon"
        label="DIRECTIONS"
        labelStyle={{ fontSize: 12 }}
        size={28}
        onPress={() => Linking.openURL(mapLink)}
      />
      <IconTextBtn
        name="taxi"
        type="material-community"
        label="UBER"
        labelStyle={{ fontSize: 12 }}
        size={28}
        onPress={() => {}}
      />
    </View>
  );
};

export default ContactBar;
