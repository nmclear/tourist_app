import { Platform } from 'react-native';

export default [
  {
    key: 'RESORT',
    name: 'pool',
    type: 'material-community',
    label: 'Resort',
  },
  {
    key: 'BEACH_FRONT',
    name: 'beach',
    type: 'material-community',
    label: 'Beach Front',
  },
  {
    key: 'DOWNTOWN',
    name: 'city',
    type: 'material-community',
    label: 'Downtown',
  },
  {
    key: 'VACATION_RENTAL',
    name: 'hot-tub',
    type: 'material-community',
    label: 'Vacation Rentals',
  },
  {
    key: 'AIR BNB',
    name: Platform.OS === 'ios' ? 'ios-key' : 'md-key',
    type: 'ionicon',
    label: 'Air BnB',
  },
  {
    key: 'CASINO',
    name: 'dice-5',
    type: 'material-community',
    label: 'Casinos',
  },
  {
    key: 'HOTEL',
    name: 'hotel',
    type: 'material-community',
    label: 'Hotels',
  },
];
