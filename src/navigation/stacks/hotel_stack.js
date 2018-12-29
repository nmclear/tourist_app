import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../../components/TabBarIcon';

import IconScreen from '../../screens/IconScreen';

import ListScreen from '../../screens/ListScreen';
import LocaleScreen from '../../screens/LocaleScreen';

import icons from '../../constants/icons/pages/hotelIcons';

import getHotelsByGroup from '../../graphql/queries/hotels/get_hotels_by_group';
import getHotelById from '../../graphql/queries/hotels/get_hotel_by_id';

const HotelStack = createStackNavigator({
  Eateries: {
    screen: props => <IconScreen {...props} icons={icons} category="HOTEL" />,
    navigationOptions: () => ({
      title: 'Hotels',
      headerBackTitle: null,
    }),
  },
  LocaleList: {
    screen: getHotelsByGroup(ListScreen),
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title'),
      headerBackTitle: null,
    }),
  },
  LocalePage: {
    screen: getHotelById(LocaleScreen),
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

export default HotelStack;
