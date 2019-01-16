import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import IconScreen from '../../screens/IconScreen';
import icons from '../../constants/icons/pages/exploreIcons';
import TabBarIcon from '../../components/TabBarIcon';

import { LocaleListRoute, LocalePageRoute } from './routes';
import { tabBarOptions, headerTitleStyle } from './styles';
import Colors from '../../constants/Colors';

const ExploreStack = createStackNavigator({
  Explore: {
    screen: props => <IconScreen {...props} icons={icons} />,
    navigationOptions: () => ({
      title: 'Explore',
      headerBackTitle: null,
      headerTitleStyle,
      headerTintColor: Colors.headerTintColor,
    }),
  },
  LocaleList: LocaleListRoute,
  LocalePage: LocalePageRoute,
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarOptions,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'binoculars' : 'binoculars'}
      type="material-community"
      size={34}
    />
  ),
};

export default ExploreStack;
