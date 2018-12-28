import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../../components/TabBarIcon';

import HotelScreen from '../../screens/HotelScreen';

import ListScreen from '../../screens/ListScreen';
import LocaleScreen from '../../screens/LocaleScreen';

import getHotelsByGroup from '../../graphql/queries/hotels/get_hotels_by_group';
import getHotelById from '../../graphql/queries/hotels/get_hotel_by_id';

const navigationOptions = () => ({
  headerBackTitle: null,
});

const HotelStack = createStackNavigator({
  Hotels: {
    screen: HotelScreen,
    navigationOptions,
  },
  HotelList: {
    screen: getHotelsByGroup(ListScreen),
    navigationOptions,
  },
  LocalePage: {
    screen: getHotelById(LocaleScreen),
    navigationOptions,
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

export default HotelStack;
