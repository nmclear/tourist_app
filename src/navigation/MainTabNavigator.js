import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import RestaurantScreen from '../screens/RestaurantScreen';
import ExploreScreen from '../screens/ExploreScreen';
import MoreScreen from '../screens/MoreScreen';

// import Location from '../components/Location';

import HomeScreen from '../screens/HomeScreen';

import ListScreen from '../screens/ListScreen';
import LocaleScreen from '../screens/LocaleScreen';

import getEateriesByGroup from '../graphql/queries/eateries/get_eateries_by_group';
import getEateryById from '../graphql/queries/eateries/get_eatery_by_id';

import { HotelStack } from './stacks';

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
  // RestaurantList: ListScreen,
  Restaurants: {
    screen: RestaurantScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  RestaurantList: {
    // screen: ListScreen,
    screen: getEateriesByGroup(ListScreen),
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  LocalePage: {
    // screen: LocaleScreen,
    screen: getEateryById(LocaleScreen),
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

const ExploreStack = createStackNavigator({
  // Explore: ExploreScreen,
  // ExploreList: ListScreen,
  Explore: {
    screen: ExploreScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
  ExploreList: {
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
  // MoreList: ListScreen,
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
  RestaurantStack,
  HotelStack,
  ExploreStack,
  MoreStack,
});
