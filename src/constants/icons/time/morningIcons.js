import { Platform } from 'react-native';

import { SPORT, NATURE, EATERY } from '../../categories';

export default [
  {
    key: 'BREAKFAST',
    name: 'silverware-variant',
    type: 'material-community',
    label: 'Breakfast',
    category: EATERY,
  },
  {
    key: 'COFFEE',
    name: 'coffee',
    type: 'material-community',
    label: 'Coffee',
    category: EATERY,
  },
  {
    key: 'BEACHES',
    name: 'lifebuoy',
    type: 'material-community',
    label: 'Beaches',
    category: NATURE,
  },
  {
    key: 'BIKE',
    name: 'bike',
    type: 'material-community',
    label: 'Trails',
    category: SPORT,
  },
  //   {
  //     key: '4',
  //     name: Platform.OS === 'ios' ? 'ios-key' : 'md-key',
  //     type: 'ionicon',
  //     label: 'Air BnB',
  //     onPress: () => {},
  //   },
];
