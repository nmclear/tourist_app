import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TestScreen from '../screens/TestScreen';

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

const RestaurantStack = createStackNavigator({
  Restaurants: RestaurantScreen,
});

RestaurantStack.navigationOptions = {
  tabBarLabel: 'Restaurant',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-restaurant'}
      type="ionicon"
      size={34}
    />
  ),
};

const HotelStack = createStackNavigator({
  Hotels: LinksScreen,
});

HotelStack.navigationOptions = {
  tabBarLabel: 'Hotel',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-bed' : 'md-bed'}
      type="ionicon"
      size={34}
    />
  ),
};

const ExploreStack = createStackNavigator({
  Explore: TestScreen,
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'binoculars' : 'binoculars'}
      type="material-community"
      size={34}
    />
  ),
};

const MoreStack = createStackNavigator({
  More: SettingsScreen,
});

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-horizontal'}
      type="material-community"
      size={34}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  RestaurantStack,
  HotelStack,
  ExploreStack,
  MoreStack,
});
