import { Platform } from 'react-native';

export default [
  {
    key: '0',
    name: 'silverware-variant',
    type: 'material-community',
    label: 'Food',
    onPress: () => {},
  },
  {
    key: '1',
    name: 'glass-cocktail',
    type: 'material-community',
    label: 'Happy Hour',
    onPress: () => {},
  },
  {
    key: '2',
    name: 'shopping',
    type: 'material-community',
    label: 'Shopping',
    onPress: () => {},
  },
  {
    key: '3',
    name: Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar',
    type: 'ionicon',
    label: 'Events',
    onPress: () => {},
  },
];
