import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';

import {
  EateryStack, HotelStack, ExploreStack, MoreStack,
} from './stacks';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
      type="ionicon"
      size={34}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  EateryStack,
  HotelStack,
  ExploreStack,
  MoreStack,
});
