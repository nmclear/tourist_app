import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../../screens/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon';
import IconBtn from '../../components/Buttons/IconBtn';
import { LocaleListRoute, LocalePageRoute } from './routes';
import { tabBarOptions, headerTitleStyle } from './styles';
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
      headerRight: (
        <IconBtn
          name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
          type="ionicon"
          onPress={() => {}}
          size={26}
          style={{ paddingRight: 15 }}
        />
      ),
    }),
  },
  LocaleList: LocaleListRoute,
  LocalePage: LocalePageRoute,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  // tabBarOptions: {
  //   activeTintColor: '#2d3436',
  // },
  tabBarOptions,
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
