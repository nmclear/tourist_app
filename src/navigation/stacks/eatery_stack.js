import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../../components/TabBarIcon';

import IconScreen from '../../screens/IconScreen';

import ListScreen from '../../screens/ListScreen';
import LocaleScreen from '../../screens/LocaleScreen';

import icons from '../../constants/icons/pages/eateryIcons';

import getEateriesByGroup from '../../graphql/queries/eateries/get_eateries_by_group';
import getEateryById from '../../graphql/queries/eateries/get_eatery_by_id';

const EateryStack = createStackNavigator({
  Eateries: {
    screen: props => <IconScreen {...props} icons={icons} category="EATERY" />,
    navigationOptions: () => ({
      title: 'Restaurants',
      headerBackTitle: null,
    }),
  },
  LocaleList: {
    screen: getEateriesByGroup(ListScreen),
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title'),
      headerBackTitle: null,
    }),
  },
  LocalePage: {
    screen: getEateryById(LocaleScreen),
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
});

EateryStack.navigationOptions = {
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

export default EateryStack;
