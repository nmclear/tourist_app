import React from 'react';
import LocaleScreen from '../../../screens/LocaleScreen';
import getLocaleById from '../../../graphql/queries/locales/get_locale_by_id';

import ShareBtn from '../../../components/Buttons/ShareBtn';

import headerTitleStyle from '../styles/header_title_style';

const LocalePageRoute = {
  screen: getLocaleById(LocaleScreen),
  navigationOptions: ({ navigation }) => {
    const name = navigation.getParam('name');
    const message = `Check out ${name}!`;

    return {
      title: name,
      headerBackTitle: null,
      // headerTransparent: true,
      // headerTintColor: '#fff',
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTitleStyle,

      headerRight: <ShareBtn message={message} style={{ paddingRight: 15 }} color="#007aff" />,
    };
  },
};

export default LocalePageRoute;
