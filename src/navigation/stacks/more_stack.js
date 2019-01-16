import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import WeatherApp from '../../components/WeatherApp';
import AboutScreen from '../../screens/AboutScreen';
import IconScreen from '../../screens/IconScreen';
import icons from '../../constants/icons/pages/moreIcons';
import TabBarIcon from '../../components/TabBarIcon';

import { LocaleListRoute, LocalePageRoute } from './routes';
import { tabBarOptions, headerTitleStyle } from './styles';
import Colors from '../../constants/Colors';

const MoreStack = createStackNavigator({
  More: {
    screen: props => <IconScreen {...props} icons={icons} />,
    navigationOptions: () => ({
      title: 'More',
      headerBackTitle: null,
      headerTitleStyle,
      headerTintColor: Colors.headerTintColor,
    }),
  },
  LocaleList: LocaleListRoute,
  LocalePage: LocalePageRoute,
  WeatherApp: {
    screen: WeatherApp,
    navigationOptions: () => ({
      headerTransparent: true,
      headerTintColor: '#fff',
    }),
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About',
      headerBackTitle: null,
      headerTitleStyle,
    },
  },
});

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarOptions,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-horizontal'}
      type="material-community"
      size={34}
    />
  ),
};

export default MoreStack;
