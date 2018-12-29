import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../../components/TabBarIcon';

import IconScreen from '../../screens/IconScreen';

import ListScreen from '../../screens/ListScreen';
import LocaleScreen from '../../screens/LocaleScreen';

import icons from '../../constants/icons/pages/exploreIcons';

import getExploreByGroup from '../../graphql/queries/explore/get_explore_by_group';
import getExploreById from '../../graphql/queries/explore/get_explore_by_id';

const ExploreStack = createStackNavigator({
  Explore: {
    screen: props => <IconScreen {...props} icons={icons} category="ENTERTAINMENT" />,
    navigationOptions: () => ({
      title: 'Explore',
      headerBackTitle: null,
    }),
  },
  LocaleList: {
    screen: getExploreByGroup(ListScreen),
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title'),
      headerBackTitle: null,
    }),
  },
  LocalePage: {
    screen: getExploreById(LocaleScreen),
    navigationOptions: () => ({
      headerBackTitle: null,
    }),
  },
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
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
