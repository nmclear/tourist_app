import { Platform } from 'react-native';

import {
  TRANSPORTATION, SPORT, ENTERTAINMENT, NATURE, EATERY, LANDMARK,
} from '../../categories';

export default [
  {
    key: 'EVENTS',
    name: Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar',
    type: 'ionicon',
    label: 'Events',
  },
  {
    key: 'PARKING',
    name: 'parking',
    type: 'material-community',
    label: 'Parking',
    // CHECKED
    // NEEDS SOLO SCREEN TOO
  },
  {
    key: 'DIRECTIONS',
    name: 'routes',
    type: 'material-community',
    label: 'Directions',
    // CHECKED
    // NEEDS SOLO SCREEN TOO
  },
  {
    key: 'WEATHER',
    name: Platform.OS === 'ios' ? 'ios-sunny' : 'md-sunny',
    type: 'ionicon',
    label: 'Weather',
  },
  {
    key: 'BUS',
    name: Platform.OS === 'ios' ? 'ios-bus' : 'md-bus',
    type: 'ionicon',
    label: 'Bus',
    category: TRANSPORTATION,
    // CHECKED
    // NEEDS SOLO SCREEN TOO
  },
  {
    key: 'LAKE_INFO',
    name: 'waves',
    type: 'material-community',
    label: 'Lake Info',
  },
  {
    key: 'COFFEE',
    name: 'coffee',
    type: 'material-community',
    label: 'Coffee',
    category: EATERY,
    // CHECKED
  },
  {
    key: 'SKIING',
    name: Platform.OS === 'ios' ? 'ios-snow' : 'md-snow',
    type: 'ionicon',
    label: 'Skiing',
    category: SPORT,
    // CHECKED
  },
  {
    key: 'GOLF',
    name: 'golf',
    type: 'material-community',
    label: 'Golf',
    category: SPORT,
    // CHECKED
  },
  {
    key: 'COMMONS',
    name: 'city-variant',
    type: 'material-community',
    label: 'Commons',
    category: LANDMARK,
    // CHECKED
    // SHOULD ADD TO LANDMARK TOO
  },
  {
    key: 'BEACHES',
    name: 'beach',
    type: 'material-community',
    label: 'Beaches',
    category: NATURE,
  },
  {
    key: 'TOURS',
    name: 'van-passenger',
    type: 'material-community',
    label: 'Tours',
    category: TRANSPORTATION,
    // CHECKED
    // SHOULD ADD TO LANDMARK TOO
  },
  {
    key: 'SHOPPING',
    name: Platform.OS === 'ios' ? 'shopping' : 'shopping',
    type: 'material-community',
    label: 'Shopping',
    category: ENTERTAINMENT,
    // CHECKED
  },
  {
    key: 'CAR_TRIPS',
    name: 'road-variant',
    type: 'material-community',
    label: 'Car Trips',
    category: TRANSPORTATION,
    // CHECKED
    // SHOULD ADD TO TRANSPORTATION TOO
  },
  {
    key: 'TAXI',
    name: 'taxi',
    type: 'material-community',
    label: 'Taxi',
    category: TRANSPORTATION,
    // CHECKED
  },
  {
    key: 'FARMS',
    name: 'tractor',
    type: 'material-community',
    label: 'Farms',
    category: LANDMARK,
  },
  {
    key: 'LIGHTHOUSES',
    name: 'lighthouse',
    type: 'material-community',
    label: 'Lighthouses',
    category: LANDMARK,
  },
  {
    key: 'ABOUT',
    name:
      Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline',
    type: 'ionicon',
    label: 'About',
  },
];
