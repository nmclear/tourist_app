import { Platform } from 'react-native';

export default [
  {
    key: 'RESORT',
    name: 'pool',
    type: 'material-community',
    label: 'Resort',
    onPress: () => {},
  },
  {
    key: 'BEACH_FRONT',
    name: 'beach',
    type: 'material-community',
    label: 'Beach Front',
    onPress: () => {},
  },
  {
    key: 'DOWNTOWN',
    name: 'city',
    type: 'material-community',
    label: 'Downtown',
    onPress: () => {},
  },
  {
    key: 'VACATION_RENTAL',
    name: 'hot-tub',
    type: 'material-community',
    label: 'Vacation Rentals',
    onPress: () => {},
  },
  {
    key: 'AIR BNB',
    name: Platform.OS === 'ios' ? 'ios-key' : 'md-key',
    type: 'ionicon',
    label: 'Air BnB',
    onPress: () => {},
  },
  {
    key: 'CASINO',
    name: 'dice-5',
    type: 'material-community',
    label: 'Casinos',
    onPress: () => {},
  },
  {
    key: 'HOTEL',
    name: 'hotel',
    type: 'material-community',
    label: 'Hotels',
    onPress: () => {},
  },
];
