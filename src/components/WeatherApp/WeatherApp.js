import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ImageBackground,
} from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import { WEATHER_API_KEY } from 'react-native-dotenv';

import weatherCondition from '../../constants/weather/weather_conditions';

const ZIPCODE = '49684';
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${ZIPCODE}&appid=${WEATHER_API_KEY}&units=imperial`;

class WeatherApp extends Component {
  state = {
    isLoading: true,
    temperature: 0,
    weather: null,
    error: null,
  };

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather = () => {
    axios
      .get(WEATHER_API_URL)
      .then(({ data }) => {
        this.setState({
          temperature: data.main.temp,
          weather: data.weather[0].main,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          error,
        });
      });
  };

  render() {
    const {
      isLoading, temperature, weather, error,
    } = this.state;

    const {
      weatherContainer,
      headerContainer,
      bodyContainer,
      titleStyle,
      tempText,
      headerTextStyle,
      tempContainer,
    } = styles;

    if (isLoading) {
      return <View />;
    }

    if (error) {
      return (
        <View>
          <Text>Error</Text>
        </View>
      );
    }

    const { icon, title, weatherImage } = weatherCondition[weather];

    return (
      <ImageBackground source={weatherImage} style={{ width: '100%', height: '100%' }}>
        <View style={[weatherContainer]}>
          <View style={headerContainer}>
            <Text style={headerTextStyle}>Current Weather</Text>
            <Text style={[headerTextStyle, { fontSize: 20 }]}>in</Text>
            <Text style={headerTextStyle}>Traverse City</Text>
          </View>
          <View style={tempContainer}>
            <Text style={tempText}>{`${Math.round(temperature)}˚F`}</Text>
          </View>
          <View style={bodyContainer}>
            <Icon size={48} name={icon} type="material-community" color="#fff" />
            <Text style={titleStyle}>{title}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerTextStyle: {
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
  },
  tempContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempText: {
    fontSize: 60,
    color: '#fff',
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 40,
    color: '#fff',
    paddingLeft: 10,
  },
});

export default WeatherApp;
