import { Platform } from 'react-native';

export default [
  {
    key: '0',
    name: Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar',
    type: 'ionicon',
    label: 'Events',
  },
  {
    key: '1',
    name: 'parking',
    type: 'material-community',
    label: 'Parking',
  },
  {
    key: '2',
    name: 'routes',
    type: 'material-community',
    label: 'Directions',
  },
  {
    key: '3',
    name: Platform.OS === 'ios' ? 'ios-sunny' : 'md-sunny',
    type: 'ionicon',
    label: 'Weather',
  },
  {
    key: '4',
    name: Platform.OS === 'ios' ? 'ios-bus' : 'md-bus',
    type: 'ionicon',
    label: 'Bus',
  },
  {
    key: '5',
    name: 'waves',
    type: 'material-community',
    label: 'Lake Info',
  },
  {
    key: '6',
    name: 'coffee',
    type: 'material-community',
    label: 'Coffee',
    // CHECKED
  },
  {
    key: '7',
    name: Platform.OS === 'ios' ? 'ios-snow' : 'md-snow',
    type: 'ionicon',
    label: 'Skiing',
  },
  {
    key: '8',
    name: 'golf',
    type: 'material-community',
    label: 'Golf',
  },
  {
    key: '9',
    name: 'city-variant',
    type: 'material-community',
    label: 'Commons',
    // CHECKED
    // SHOULD ADD TO LANDMARK TOO
  },
  {
    key: '10',
    name: 'beach',
    type: 'material-community',
    label: 'Beaches',
  },
  {
    key: '11',
    name: 'van-passenger',
    type: 'material-community',
    label: 'Tours',
    // CHECKED
    // SHOULD ADD TO LANDMARK TOO
  },
  {
    key: '12',
    name: Platform.OS === 'ios' ? 'shopping' : 'shopping',
    type: 'material-community',
    label: 'Shopping',
    // CHECKED
  },
  {
    key: '13',
    name: 'road-variant',
    type: 'material-community',
    label: 'Car Trips',
    // CHECKED
    // SHOULD ADD TO TRANSPORTATION TOO
  },
  {
    key: '14',
    name: 'taxi',
    type: 'material-community',
    label: 'Taxi',
  },
  {
    key: '15',
    name: 'tractor',
    type: 'material-community',
    label: 'Farms',
  },
  {
    key: '16',
    name: 'lighthouse',
    type: 'material-community',
    label: 'Lighthouses',
  },
  {
    key: '17',
    name:
      Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline',
    type: 'ionicon',
    label: 'About',
  },
];
