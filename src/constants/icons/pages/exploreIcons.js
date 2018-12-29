import { Platform } from 'react-native';

export default [
  {
    key: 'BIKE',
    name: 'bike',
    type: 'material-community',
    label: 'Bike Trails',
  },
  {
    key: 'HIKING',
    name: 'terrain',
    type: 'material-community',
    label: 'Hiking',
  },
  {
    key: 'BEACH',
    name: 'beach',
    type: 'material-community',
    label: 'Beaches',
  },
  {
    key: 'LAKE',
    name: 'waves',
    type: 'material-community',
    label: 'Lakes',
  },
  {
    key: 'SKIING',
    name: 'snowflake',
    type: 'material-community',
    label: 'Skiing',
  },
  {
    key: 'BREWERY',
    name: Platform.OS === 'ios' ? 'ios-beer' : 'md-beer',
    type: 'ionicon',
    label: 'Breweries',
    // CHECKED
  },
  {
    key: 'WINERY',
    name: Platform.OS === 'ios' ? 'ios-wine' : 'md-wine',
    type: 'ionicon',
    label: 'Wineries',
    // CHECKED
  },
  {
    key: 'THEATER',
    name: 'ticket',
    type: 'material-community',
    label: 'Theater',
    // CHECKED
  },
  {
    key: 'PARKS',
    name: 'flower',
    type: 'material-community',
    label: 'Parks',
  },
  {
    key: 'NIGHT_LIFE',
    name: 'glass-cocktail',
    type: 'material-community',
    label: 'Nightlife',
    // CHECKED
  },
  {
    key: 'ART',
    name: Platform.OS === 'ios' ? 'ios-brush' : 'md-brush',
    type: 'ionicon',
    label: 'Art',
    // CHECKED
  },
  {
    key: 'GOLF',
    name: 'golf',
    type: 'material-community',
    label: 'Golf',
  },
  {
    key: 'GYMS',
    name: 'dumbbell',
    type: 'material-community',
    label: 'Gyms',
  },
  {
    key: 'DOG_FRIENDLY',
    name: Platform.OS === 'ios' ? 'ios-paw' : 'md-paw',
    type: 'ionicon',
    label: 'Dog Friendly',
  },
  {
    key: 'DOWNTOWN',
    name: 'city',
    type: 'material-community',
    label: 'Downtown',
    // CHECKED
  },
];
