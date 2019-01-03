import { Platform } from 'react-native';

import {
  SPORT, ENTERTAINMENT, NATURE, ALL, EATERY,
} from '../../categories';

// const SPORT = 'SPORT';
// const ENTERTAINMENT = 'ENTERTAINMENT';

export default [
  {
    key: 'BIKE',
    name: 'bike',
    type: 'material-community',
    label: 'Bike Trails',
    category: SPORT,
  },
  {
    key: 'HIKING',
    name: 'terrain',
    type: 'material-community',
    label: 'Hiking',
    category: SPORT,
    // SHOULD ADD TO NATURE TOO
  },
  {
    key: 'BEACHES',
    name: 'beach',
    type: 'material-community',
    label: 'Beaches',
    category: NATURE,
  },
  {
    key: 'LAKES',
    name: 'waves',
    type: 'material-community',
    label: 'Lakes',
    category: NATURE,
  },
  {
    key: 'SKIING',
    name: 'snowflake',
    type: 'material-community',
    label: 'Skiing',
    category: SPORT,
    // CHECKED
  },
  {
    key: 'BREWERY',
    name: Platform.OS === 'ios' ? 'ios-beer' : 'md-beer',
    type: 'ionicon',
    label: 'Breweries',
    category: EATERY,
    // CHECKED
  },
  {
    key: 'WINERY',
    name: Platform.OS === 'ios' ? 'ios-wine' : 'md-wine',
    type: 'ionicon',
    label: 'Wineries',
    category: ENTERTAINMENT,
    // CHECKED
  },
  {
    key: 'THEATER',
    name: 'ticket',
    type: 'material-community',
    label: 'Theater',
    category: ENTERTAINMENT,
  },
  {
    key: 'PARKS',
    name: 'flower',
    type: 'material-community',
    label: 'Parks',
    category: NATURE,
  },
  {
    key: 'NIGHT_LIFE',
    name: 'glass-cocktail',
    type: 'material-community',
    label: 'Nightlife',
    category: ENTERTAINMENT,
    // CHECKED
  },
  {
    key: 'ART',
    name: Platform.OS === 'ios' ? 'ios-brush' : 'md-brush',
    type: 'ionicon',
    label: 'Art',
    category: ENTERTAINMENT,
    // CHECKED
  },
  {
    key: 'GOLF',
    name: 'golf',
    type: 'material-community',
    label: 'Golf',
    category: SPORT,
    // CHECKED
  },
  {
    key: 'GYM',
    name: 'dumbbell',
    type: 'material-community',
    label: 'Gyms',
    category: SPORT,
    // CHECKED
  },
  {
    key: 'DOG_FRIENDLY',
    name: Platform.OS === 'ios' ? 'ios-paw' : 'md-paw',
    type: 'ionicon',
    label: 'Dog Friendly',
    category: ALL,
  },
  {
    key: 'DOWNTOWN',
    name: 'city',
    type: 'material-community',
    label: 'Downtown',
    category: ENTERTAINMENT,
    // CHECKED
  },
];
