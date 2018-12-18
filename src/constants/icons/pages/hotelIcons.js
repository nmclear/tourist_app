import { Platform } from 'react-native';

export default [
  {
    key: '0',
    name: 'pool',
    type: 'material-community',
    label: 'Resort',
    onPress: () => {},
  },
  {
    key: '1',
    name: 'beach',
    type: 'material-community',
    label: 'Beach Front',
    onPress: () => {},
  },
  {
    key: '2',
    name: 'city',
    type: 'material-community',
    label: 'Downtown',
    onPress: () => {},
  },
  {
    key: '3',
    name: 'hot-tub',
    type: 'material-community',
    label: 'Vacation Rentals',
    onPress: () => {},
  },
  {
    key: '4',
    name: Platform.OS === 'ios' ? 'ios-key' : 'md-key',
    type: 'ionicon',
    label: 'Air BnB',
    onPress: () => {},
  },
  {
    key: '5',
    name: 'dice-5',
    type: 'material-community',
    label: 'Casinos',
    onPress: () => {},
  },
  {
    key: '6',
    name: 'hotel',
    type: 'material-community',
    label: 'Hotels',
    onPress: () => {},
  },
];
