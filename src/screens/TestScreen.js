import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import HomeIconBar from '../components/HomeIconBar';
import CardModal from '../components/CardModal';
import MapScreen from '../components/Map';
import IconWithText from '../components/IconWithText';

import { morningIcons, noonIcons, afternoonIcons, nightIcons, lateNightIcons } from '../constants/icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Visit TC',
  };

  state = {
    greetingDisplay: 'flex',
    mapBarDisplay: 'none',
    icons: noonIcons,
    greeting: 'Good Day!',
    tagline: `Here's what's happening around the corner..`
  };

  componentDidMount(){
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
        greeting = 'Good Morning!'
      }
      else if (time >= 11 && time < 15) {
        icons = noonIcons;
        greeting = 'Happy Day!'
      }
      else if (time >= 15 && time < 18) {
        icons = afternoonIcons;
        greeting = 'Good Afternoon!';
      }
      else if (time >= 18 && time < 22) {
        icons = nightIcons;
        greeting: 'Good Evening!';
      }
      else if (time >= 22 && time < 4) {
        icons = lateNightIcons;
        greeting = 'Happy LateNight!';
      }

      this.setState({ icons, greeting })
    };
  

  renderIcons = (icons) => {
    return icons.map(icon => {
      const {
        name, onPress, label, type, key
      } = icon;
      return (
        <IconWithText
          key={key}
          name={name}
          type={type}
          size={28}
          onPress={onPress}
          label={label}
        />
      );
    })
  }

  render() {
    const { container, iconContainer } = styles;
    const { greetingDisplay, mapBarDisplay, icons, greeting, tagline } = this.state;
 
    return (
      <View style={container}>
        <HomeIconBar visible={mapBarDisplay} onOpenPress={this.onGreetingOpen} />
        <CardModal title={greeting} tagline={tagline} visible={greetingDisplay} onClosePress={this.onGreetingClose}>
          <View style={iconContainer}>
          {this.renderIcons(icons)}
          </View>
        </CardModal>
        <MapScreen />
      </View>
    );
  }
}

export default HomeScreen;
