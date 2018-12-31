import ListScreen from '../../../screens/ListScreen';
import getLocalesByGroup from '../../../graphql/queries/locales/get_locales_by_group';

const LocaleListRoute = {
  screen: getLocalesByGroup(ListScreen),
  navigationOptions: ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerBackTitle: null,
  }),
};

export default LocaleListRoute;
