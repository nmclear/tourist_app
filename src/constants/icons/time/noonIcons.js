import { Platform } from 'react-native';
import {
  SPORT, ENTERTAINMENT, NATURE, ALL, EATERY, LANDMARK,
} from '../../categories';

export default [
  {
    key: 'AMERICAN',
    name: 'silverware-variant',
    type: 'material-community',
    label: 'Lunch',
    category: EATERY,
  },
  {
    key: 'HIKING',
    name: 'terrain',
    type: 'material-community',
    label: 'Hiking',
    category: NATURE,
  },
  {
    key: 'COMMONS',
    name: 'city-variant',
    type: 'material-community',
    label: 'Commons',
    category: LANDMARK,
  },
  {
    key: 'PARKS',
    name: 'flower',
    type: 'material-community',
    label: 'Parks',
    category: NATURE,
  },
  //   {
  //     key: '4',
  //     name: Platform.OS === 'ios' ? 'ios-key' : 'md-key',
  //     type: 'ionicon',
  //     label: 'Air BnB',
  //     onPress: () => {},
  //   },
];
