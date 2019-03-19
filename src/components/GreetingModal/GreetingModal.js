import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { ButtonGroup } from 'react-native-elements';

import LocaleScroll from '../LocaleScroll';

import Layout from '../../constants/Layout';
import { HeaderText, BodyText } from '../Texts';

import {
  MORNING_TIME,
  NOON_TIME,
  AFTERNOON_TIME,
  NIGHT_TIME,
  LATE_TIME,
} from '../../constants/types/time_of_day_types';

import GREETING_OPTIONS from '../../constants/types/greeting_type';

import styles from './styles';

class GreetingModal extends Component {
  state = {
    selectedIndex: 0,
    buttons: [],
    greeting: null,
    timeOfDay: null,
  };

  componentDidMount = async () => {
    await this.renderTimeOfDay();
    this.view.slideInDown(400);
  };

  handleViewRef = (ref) => {
    this.view = ref;
  };

  fadeOutModal = () => this.view.fadeOutUp(800);

  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  renderTimeOfDay = () => {
    const time = new Date().getHours();
    let buttons = [];
    let greeting = '';
    let timeOfDay = '';
    if (time >= 4 && time < 11) {
      buttons = ['Breakfast', 'Coffee', 'Bike'];
      greeting = 'Good Morning!';
      timeOfDay = MORNING_TIME;
    } else if (time >= 11 && time < 15) {
      buttons = ['Lunch', 'Hike', 'Beach'];
      greeting = 'Seize the Day!';
      timeOfDay = NOON_TIME;
    } else if (time >= 15 && time < 18) {
      buttons = ['Food', 'Drinks', 'Shop'];
      greeting = 'Good Afternoon!';
      timeOfDay = AFTERNOON_TIME;
    } else if (time >= 18 && time < 22) {
      buttons = ['Dinner', 'Night Life', 'Theater'];
      greeting = 'Good Evening!';
      timeOfDay = NIGHT_TIME;
    } else if (time >= 22 || time < 4) {
      buttons = ['Food', 'Night Life', 'Hotel'];
      greeting = 'Calling All Night Owls!';
      timeOfDay = LATE_TIME;
    }
    buttons.unshift('All');

    this.setState({ greeting, buttons, timeOfDay });
  };

  filterLocales = (locales) => {
    const { timeOfDay, selectedIndex } = this.state;
    if (!timeOfDay) return locales;

    const currentChoices = GREETING_OPTIONS.get(timeOfDay);

    const all = [];
    const options = [];
    Object.values(currentChoices).forEach((value) => {
      all.push(...value);
      options.push(value);
    });

    options.unshift(all);

    const filtered = locales.filter((locale) => {
      let valid = false;
      options[selectedIndex].forEach((option) => {
        if (locale.groups.indexOf(option) !== -1) {
          valid = true;
        }
      });
      return valid;
    });
    return filtered;
  };

  render() {
    const { onClosePress, locales, onItemPress } = this.props;
    const { greeting, buttons } = this.state;
    const { container, btnTextStyle, buttonStyle } = styles;
    const tagline = "Here's what's happening around the corner..";
    const { selectedIndex } = this.state;
    return (
      <Animatable.View ref={this.handleViewRef} style={container}>
        <HeaderText style={{ marginBottom: 5 }}>{greeting}</HeaderText>
        <BodyText style={{ textAlign: 'center' }}>{tagline}</BodyText>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerBorderRadius={10}
          containerStyle={{ height: 30 }}
        />
        <LocaleScroll data={this.filterLocales(locales)} onItemPress={onItemPress} />
        <TouchableOpacity style={buttonStyle} onPress={() => onClosePress(this.fadeOutModal)}>
          <BodyText style={btnTextStyle}>hide</BodyText>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

export default GreetingModal;
