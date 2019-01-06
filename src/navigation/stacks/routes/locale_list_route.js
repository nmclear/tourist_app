import ListScreen from '../../../screens/ListScreen';
import getLocalesByGroup from '../../../graphql/queries/locales/get_locales_by_group';

import headerTitleStyle from '../styles/header_title_style';

const LocaleListRoute = {
  screen: getLocalesByGroup(ListScreen),
  navigationOptions: ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerBackTitle: null,
    headerTitleStyle,
  }),
};

export default LocaleListRoute;
