import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import IconScreen from '../../screens/IconScreen';
import icons from '../../constants/icons/pages/moreIcons';
import TabBarIcon from '../../components/TabBarIcon';

import { LocaleListRoute, LocalePageRoute } from './routes';

const MoreStack = createStackNavigator({
  More: {
    screen: props => <IconScreen {...props} icons={icons} />,
    navigationOptions: () => ({
      title: 'More',
      headerBackTitle: null,
    }),
  },
  LocaleList: LocaleListRoute,
  LocalePage: LocalePageRoute,
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

export default MoreStack;
