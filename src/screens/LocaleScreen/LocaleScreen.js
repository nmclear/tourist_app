import React, { Component } from 'react';
import {
  ScrollView, View, Text, Linking, Platform,
} from 'react-native';

import TilePageHeader from '../../components/TilePageHeader';
import LgBlackBtn from '../../components/Buttons/LgBlackBtn';
import ContactBar from '../../components/ContactBar';
// import NavBackBtn from '../../components/Buttons/NavBackBtn';
import SingleMarkerMap from '../../components/SingleMarkerMap';

import styles from './styles';

class LocaleScreen extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: '#fff',
    headerStyle: {
      borderBottomWidth: 0,
    },
  };

  render() {
    const { navigation } = this.props;
    const locale = navigation.getParam('locale');
    const {
      id, uri, name, type, description, website, details, location, contact,
    } = locale;

    const { phone, email } = contact;
    const { address, city, coordinates } = location;

    const {
      container, textBox, descrStyle, headerStyle,
    } = styles;
    return (
      <View style={container} key={id}>
        <View>
          <TilePageHeader uri={uri} title={name} caption={type} height={160} />
          <ContactBar phone={phone} coordinates={coordinates} />
        </View>
        <ScrollView>
          <View style={textBox}>
            <Text style={headerStyle}>{type}</Text>
            <Text style={descrStyle}>{details}</Text>
          </View>
          <View style={textBox}>
            <Text style={headerStyle}>{`About ${name}`}</Text>
            <Text style={descrStyle}>{description || 'No Details'}</Text>
          </View>
          <View>
            <SingleMarkerMap
              scrollable={false}
              zoomable={false}
              markerName={name}
              coordinate={coordinates}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default LocaleScreen;
