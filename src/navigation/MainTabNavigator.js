import { createBottomTabNavigator } from 'react-navigation';

import {
  HomeStack, EateryStack, HotelStack, ExploreStack, MoreStack,
} from './stacks';

export default createBottomTabNavigator({
  HomeStack,
  EateryStack,
  HotelStack,
  ExploreStack,
  MoreStack,
});
