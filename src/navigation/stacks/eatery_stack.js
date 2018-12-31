import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import IconScreen from '../../screens/IconScreen';
import icons from '../../constants/icons/pages/eateryIcons';
import TabBarIcon from '../../components/TabBarIcon';

import { LocaleListRoute, LocalePageRoute } from './routes';

const EateryStack = createStackNavigator({
  Eateries: {
    screen: props => <IconScreen {...props} icons={icons} />,
    navigationOptions: () => ({
      title: 'Restaurants',
      headerBackTitle: null,
    }),
  },
  LocaleList: LocaleListRoute,
  LocalePage: LocalePageRoute,
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
