import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, ActivityIndicator,
} from 'react-native';

import MapIconBar from '../components/MapIconBar';
import CardModal from '../components/CardModal';
import LocaleMap from '../components/LocaleMap';
import IconTextBtn from '../components/Buttons/IconTextBtn';

import IconBtn from '../components/Buttons/IconBtn';

// import UberBtn from '../components/Buttons/UberBtn';
// import LyftBtn from '../components/Buttons/LyftBtn';

import {
  morningIcons,
  noonIcons,
  afternoonIcons,
  nightIcons,
  lateNightIcons,
} from '../constants/icons';

// const testUberLocation = {
//   address: '627 Sleepy Hollow Ln',
//   city: 'Laguna Beach',
//   state: 'CA',
//   zipcode: '92651',
//   coordinate: {
//     latitude: 33.53846,
//     longitude: -117.78114,
//   },
// };

// <UberBtn location={testUberLocation} name="The Deck" />

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
    } else if (time >= 22 || time < 4) {
      icons = lateNightIcons;
      greeting = 'Happy LateNight!';
    }

    this.setState({ icons, greeting });
  };

  renderModalIcons = icons => icons.map((icon) => {
    const { navigation } = this.props;

    const {
      name, label, type, key, category, onPress,
    } = icon;

    const onIconPress = () => navigation.navigate('LocaleList', { title: label, group: key, category });
    return (
      <IconTextBtn
        key={key}
        name={name}
        type={type}
        size={28}
        onPress={onPress || onIconPress}
        label={label}
      />
    );
  });

  render() {
    const { container, iconContainer } = styles;
    const {
      navigation, loading, error, locales,
    } = this.props;

    if (error) return <View />;
    if (loading) {
      return (
        <View style={[{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }]}>
          <ActivityIndicator />
        </View>
      );
    }

    const {
      greetingDisplay,
      mapBarDisplay,
      icons,
      greeting,
      tagline,
      followUserLocation,
    } = this.state;

    const onMarkerPress = (id, name) => navigation.navigate('LocalePage', { id, name });

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

        <LocaleMap
          followUserLocation={followUserLocation}
          markers={locales}
          onMarkerPress={onMarkerPress}
        />
      </View>
    );
  }
}

export default HomeScreen;
