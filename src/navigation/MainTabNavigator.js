import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HotelScreen from '../screens/HotelScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import ExploreScreen from '../screens/ExploreScreen';
import MoreScreen from '../screens/MoreScreen';

// import Location from '../components/Location';

import HomeScreen from '../screens/HomeScreen';

import LocaleList from '../components/LocaleList';
import LocaleScreen from '../screens/LocaleScreen';

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
  // Restaurants: RestaurantScreen,
  // RestaurantList: LocaleList,
  Restaurants: {
    screen: RestaurantScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  RestaurantList: {
    screen: LocaleList,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  LocalePage: {
    screen: LocaleScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
});

RestaurantStack.navigationOptions = {
  tabBarLabel: 'Restaurants',
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
  // Hotels: HotelScreen,
  // HotelList: LocaleList,
  Hotels: {
    screen: HotelScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  HotelList: {
    screen: LocaleList,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  LocalePage: {
    screen: LocaleScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
});

HotelStack.navigationOptions = {
  tabBarLabel: 'Hotels',
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
  // Explore: ExploreScreen,
  // ExploreList: LocaleList,
  Explore: {
    screen: ExploreScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  ExploreList: {
    screen: LocaleList,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  LocalePage: {
    screen: LocaleScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
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
  // More: MoreScreen,
  // MoreList: LocaleList,
  More: {
    screen: MoreScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  MoreList: {
    screen: LocaleList,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  LocalePage: {
    screen: LocaleScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
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
