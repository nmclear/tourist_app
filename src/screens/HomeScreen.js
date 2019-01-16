import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import MapIconBar from '../components/MapIconBar';
import LocaleMap from '../components/LocaleMap';
import IconTextBtn from '../components/Buttons/IconTextBtn';

import GreetingModal from '../components/GreetingModal';
// import LocaleScroll from '../components/LocaleScroll';

// import {
//   morningIcons,
//   noonIcons,
//   afternoonIcons,
//   nightIcons,
//   lateNightIcons,
// } from '../constants/icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

class HomeScreen extends Component {
  state = {
    modalOpen: false,
    // icons: noonIcons,
    // greetingBtns: [],
    // greeting: 'Good Day!',
    followUserLocation: false,
    // tagline: "Here's what's happening around the corner..",
  };

  componentDidMount() {
    this.openModal();
    // this.renderTimeOfDay();
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = async (cb) => {
    await cb();
    this.setState({ modalOpen: false });
  };

  // renderTimeOfDay = () => {
  //   const time = new Date().getHours();
  //   let icons = [];
  //   let greetingBtns = [];
  //   let greeting = '';
  //   if (time >= 4 && time < 11) {
  //     icons = morningIcons;
  //     greetingBtns = ['Breakfast', 'Coffee', 'Bike'];
  //     greeting = 'Good Morning!';
  //   } else if (time >= 11 && time < 15) {
  //     icons = noonIcons;
  //     greetingBtns = ['Lunch', 'Hike', 'Shop'];
  //     greeting = 'Happy Day!';
  //   } else if (time >= 15 && time < 18) {
  //     icons = afternoonIcons;
  //     greetingBtns = ['Lunch', 'Hike', 'Shop'];
  //     greeting = 'Good Afternoon!';
  //   } else if (time >= 18 && time < 22) {
  //     icons = nightIcons;
  //     greetingBtns = ['Lunch', 'Hike', 'Shop'];
  //     greeting = 'Good Evening!';
  //   } else if (time >= 22 || time < 4) {
  //     icons = lateNightIcons;
  //     greetingBtns = ['Lunch', 'Hike', 'Shop'];
  //     greeting = 'Happy LateNight!';
  //   }
  //   greetingBtns.unshift('All');

  //   this.setState({ icons, greeting, greetingBtns });
  // };

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

    const { icons, followUserLocation, modalOpen } = this.state;

    const onMarkerPress = (id, name) => navigation.navigate('LocalePage', { id, name });

    const modal = modalOpen ? (
      <GreetingModal locales={locales} onItemPress={onMarkerPress} onClosePress={this.closeModal} />
    ) : null;

    return (
      <View style={container}>
        <MapIconBar
          onOpenPress={this.openModal}
          onUserLocationPress={() => this.setState({ followUserLocation: true })}
        />

        {modal}

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
