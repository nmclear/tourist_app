import { Platform } from 'react-native';
import { WebBrowser } from 'expo';
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
    onPress: () => WebBrowser.openBrowserAsync(
      'https://www.vrbo.com/results?adultsCount=4&petIncluded=false&adults=4&children=0&infantsCount=0&pets=false&q=Traverse%20City%2C%20MI%2C%20USA',
    ),
  },
  {
    key: 'AIR BNB',
    name: Platform.OS === 'ios' ? 'ios-key' : 'md-key',
    type: 'ionicon',
    label: 'Air BnB',
    category,
    onPress: () => WebBrowser.openBrowserAsync(
      'https://www.airbnb.com/s/Traverse-City--MI--United-States/homes?query=Traverse%20City%2C%20MI%2C%20United%20States&adults=4&children=0&infants=0&guests=4&place_id=ChIJ3Sna17IyHogRIVZ0Pz_cv0c&refinement_paths%5B%5D=%2Fhomes&toddlers=0&allow_override%5B%5D=&s_tag=sRmI58xl',
    ),
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
