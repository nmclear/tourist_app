import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import HomeIconBar from '../components/HomeIconBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Visit TC',
  };

  state = {
    greetingDisplay: 'flex',
    marBarDisplay: 'none',
  };

  render() {
    const { container } = styles;
    const { greetingDisplay, marBarDisplay } = this.state;

    return (
      <View style={container}>
        <HomeIconBar />
      </View>
    );
  }
}

export default HomeScreen;
