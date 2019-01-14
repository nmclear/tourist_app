import { Platform } from 'react-native';

import { ENTERTAINMENT, EATERY, TRANSPORTATION } from '../../categories';

export default [
  {
    key: 'STEAK',
    name: 'silverware-variant',
    type: 'material-community',
    label: 'Dinner',
    category: EATERY,
  },
  {
    key: 'BAR',
    name: 'glass-cocktail',
    type: 'material-community',
    label: 'Nightlife',
    category: EATERY,
  },
  {
    key: 'THEATER',
    name: 'ticket',
    type: 'material-community',
    label: 'Theater',
    category: ENTERTAINMENT,
  },
  {
    key: 'TAXI',
    name: 'taxi',
    type: 'material-community',
    label: 'Taxi',
    category: TRANSPORTATION,
  },
  //   {
  //     key: '4',
  //     name: Platform.OS === 'ios' ? 'ios-key' : 'md-key',
  //     type: 'ionicon',
  //     label: 'Air BnB',
  //
  //   },
];
