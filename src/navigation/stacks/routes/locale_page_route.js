import LocaleScreen from '../../../screens/LocaleScreen';
import getLocaleById from '../../../graphql/queries/locales/get_locale_by_id';

const LocalePageRoute = {
  screen: getLocaleById(LocaleScreen),
  navigationOptions: () => ({
    headerBackTitle: null,
  }),
};

export default LocalePageRoute;
