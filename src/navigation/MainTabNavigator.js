import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import IconScreen from '../screens/IconScreen';

// import EateryScreen from '../screens/EateryScreen';
// import ExploreScreen from '../screens/ExploreScreen';
import MoreScreen from '../screens/MoreScreen';

// import Location from '../components/Location';

import HomeScreen from '../screens/HomeScreen';

import ListScreen from '../screens/ListScreen';
import LocaleScreen from '../screens/LocaleScreen';

// import getEateriesByGroup from '../graphql/queries/eateries/get_eateries_by_group';
// import getEateryById from '../graphql/queries/eateries/get_eatery_by_id';

// import eateryIcons from '../constants/icons/pages/eateryIcons';

import { EateryStack, HotelStack, ExploreStack } from './stacks';

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

const MoreStack = createStackNavigator({
  More: {
    screen: MoreScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  MoreList: {
    screen: ListScreen,
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
  EateryStack,
  HotelStack,
  ExploreStack,
  MoreStack,
});
