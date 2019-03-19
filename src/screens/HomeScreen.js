import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import MapIconBar from '../components/MapIconBar';
import LocaleMap from '../components/LocaleMap';
import IconTextBtn from '../components/Buttons/IconTextBtn';

import GreetingModal from '../components/GreetingModal';

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
    followUserLocation: false,
  };

  componentDidMount() {
    this.openModal();
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = async (cb) => {
    await cb();
    this.setState({ modalOpen: false });
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
    const { container } = styles;
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

    const { followUserLocation, modalOpen } = this.state;

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
