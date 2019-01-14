import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../../screens/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon';

import { LocaleListRoute, LocalePageRoute } from './routes';
import headerTitleStyle from './styles/header_title_style';
import getLocaleMarkers from '../../graphql/queries/locales/get_locale_markers';
import Colors from '../../constants/Colors';

const HomeStack = createStackNavigator({
  Home: {
    screen: getLocaleMarkers(HomeScreen),
    navigationOptions: () => ({
      title: 'Visit TC',
      headerBackTitle: null,
      headerTitleStyle,
      headerTintColor: Colors.headerTintColor,
    }),
  },
  LocaleList: LocaleListRoute,
  LocalePage: LocalePageRoute,
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

export default HomeStack;
