import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import MapIconBar from '../components/MapIconBar';
import CardModal from '../components/CardModal';
import LocaleMap from '../components/LocaleMap';
import IconTextBtn from '../components/Buttons/IconTextBtn';

import IconBtn from '../components/Buttons/IconBtn';

import {
  morningIcons,
  noonIcons,
  afternoonIcons,
  nightIcons,
  lateNightIcons,
} from '../constants/icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Visit TC',
    headerRight: (
      <IconBtn
        name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
        type="ionicon"
        onPress={() => {}}
        style={{ paddingRight: 15 }}
      />
    ),
  };

  state = {
    greetingDisplay: 'flex',
    mapBarDisplay: 'none',
    icons: noonIcons,
    greeting: 'Good Day!',
    followUserLocation: false,
    tagline: "Here's what's happening around the corner..",
  };

  componentDidMount() {
    this.renderTimeOfDay();
  }

  onGreetingOpen = () => this.setState({ greetingDisplay: 'flex', mapBarDisplay: 'none' });

  onGreetingClose = () => this.setState({ greetingDisplay: 'none', mapBarDisplay: 'flex' });

  renderTimeOfDay = () => {
    const time = new Date().getHours();
    let icons = [];
    let greeting = '';
    if (time >= 4 && time < 11) {
      icons = morningIcons;
      greeting = 'Good Morning!';
    } else if (time >= 11 && time < 15) {
      icons = noonIcons;
      greeting = 'Happy Day!';
    } else if (time >= 15 && time < 18) {
      icons = afternoonIcons;
      greeting = 'Good Afternoon!';
    } else if (time >= 18 && time < 22) {
      icons = nightIcons;
      greeting = 'Good Evening!';
    } else if (time >= 22 && time < 4) {
      icons = lateNightIcons;
      greeting = 'Happy LateNight!';
    }

    this.setState({ icons, greeting });
  };

  renderModalIcons = icons => icons.map((icon) => {
    const {
      name, onPress, label, type, key,
    } = icon;
    return (
      <IconTextBtn key={key} name={name} type={type} size={28} onPress={onPress} label={label} />
    );
  });

  render() {
    const { container, iconContainer } = styles;
    const {
      greetingDisplay,
      mapBarDisplay,
      icons,
      greeting,
      tagline,
      followUserLocation,
    } = this.state;

    return (
      <View style={container}>
        <MapIconBar
          visible={mapBarDisplay}
          onOpenPress={this.onGreetingOpen}
          onUserLocationPress={() => this.setState({ followUserLocation: true })}
        />
        <CardModal
          title={greeting}
          tagline={tagline}
          visible={greetingDisplay}
          onClosePress={this.onGreetingClose}
        >
          <View style={iconContainer}>{this.renderModalIcons(icons)}</View>
        </CardModal>
        <LocaleMap followUserLocation={followUserLocation} />
      </View>
    );
  }
}

export default HomeScreen;
