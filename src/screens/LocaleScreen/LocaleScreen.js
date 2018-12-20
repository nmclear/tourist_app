import React, { Component } from 'react';
import {
  ScrollView, View, Text, Linking, Platform, StatusBar,
} from 'react-native';

import { WebBrowser } from 'expo';
import TilePageHeader from '../../components/TilePageHeader';
import LgBlackBtn from '../../components/Buttons/LgBlackBtn';
import IconBtn from '../../components/Buttons/IconBtn';
import ContactBar from '../../components/ContactBar';
import NavBackBtn from '../../components/Buttons/NavBackBtn';

import styles from './styles';

class LocaleScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { name } = navigation.getParam('locale');
  //   return {
  //     title: name,
  //     headerStyle: {
  //       backgroundColor: '#f4511e',
  //     },
  //   };
  // };
  static navigationOptions = {
    header: null,
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
        <NavBackBtn onPress={() => navigation.pop()} />
        <StatusBar barStyle="light-content" />
        <View>
          <TilePageHeader uri={uri} title={name} caption={type} />
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
        </ScrollView>
        <LgBlackBtn title="Learn More" onPress={() => WebBrowser.openBrowserAsync(website)} />
      </View>
    );
  }
}

export default LocaleScreen;
