import ListScreen from '../../../screens/ListScreen';
import getLocalesByGroup from '../../../graphql/queries/locales/get_locales_by_group';

import headerTitleStyle from '../styles/header_title_style';
import Colors from '../../../constants/Colors';

const LocaleListRoute = {
  screen: getLocalesByGroup(ListScreen),
  navigationOptions: ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerMode: 'float',
    headerBackTitle: null,
    headerTintColor: Colors.headerTintColor,
    // headerStyle: {
    //   borderBottomWidth: 0,
    // },
    headerTitleStyle,
  }),
};

export default LocaleListRoute;
