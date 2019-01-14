import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import IconScreen from '../../screens/IconScreen';
import icons from '../../constants/icons/pages/hotelIcons';
import TabBarIcon from '../../components/TabBarIcon';

import { LocaleListRoute, LocalePageRoute } from './routes';
import headerTitleStyle from './styles/header_title_style';
import Colors from '../../constants/Colors';

const HotelStack = createStackNavigator({
  Eateries: {
    screen: props => <IconScreen {...props} icons={icons} />,
    navigationOptions: () => ({
      title: 'Hotels',
      headerBackTitle: null,
      headerTitleStyle,
      headerTintColor: Colors.headerTintColor,
    }),
  },
  LocaleList: LocaleListRoute,
  LocalePage: LocalePageRoute,
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
