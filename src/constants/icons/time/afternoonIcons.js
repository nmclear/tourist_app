import { Platform } from 'react-native';
import { WebBrowser } from 'expo';
import { EATERY, ENTERTAINMENT } from '../../categories';

export default [
  {
    key: 'AMERICAN',
    name: 'silverware-variant',
    type: 'material-community',
    label: 'Food',
    category: EATERY,
  },
  {
    key: 'BAR',
    name: 'glass-cocktail',
    type: 'material-community',
    label: 'Happy Hour',
    category: EATERY,
  },
  {
    key: 'SHOPPING',
    name: 'shopping',
    type: 'material-community',
    label: 'Shopping',
    category: ENTERTAINMENT,
  },
  {
    key: 'EVENTS',
    name: Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar',
    type: 'ionicon',
    label: 'Events',
    onPress: () => WebBrowser.openBrowserAsync('https://www.traversecity.com/events/'),
  },
];
