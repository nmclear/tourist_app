import { Platform } from 'react-native';

import { HOTEL } from '../../categories';

const category = HOTEL;

export default [
  {
    key: 'RESORT',
    name: 'pool',
    type: 'material-community',
    label: 'Resort',
    category,
  },
  {
    key: 'BEACH_FRONT',
    name: 'beach',
    type: 'material-community',
    label: 'Beach Front',
    category,
  },
  {
    key: 'DOWNTOWN',
    name: 'city',
    type: 'material-community',
    label: 'Downtown',
    category,
  },
  {
    key: 'VACATION_RENTAL',
    name: 'hot-tub',
    type: 'material-community',
    label: 'Vacation Rentals',
    category,
  },
  {
    key: 'AIR BNB',
    name: Platform.OS === 'ios' ? 'ios-key' : 'md-key',
    type: 'ionicon',
    label: 'Air BnB',
    category,
  },
  {
    key: 'CASINO',
    name: 'dice-5',
    type: 'material-community',
    label: 'Casinos',
    category,
  },
  {
    key: 'HOTEL',
    name: 'hotel',
    type: 'material-community',
    label: 'Hotels',
    category,
  },
];
