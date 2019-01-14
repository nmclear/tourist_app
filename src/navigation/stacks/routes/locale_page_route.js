import React from 'react';
import LocaleScreen from '../../../screens/LocaleScreen';
import getLocaleById from '../../../graphql/queries/locales/get_locale_by_id';

import ShareBtn from '../../../components/Buttons/ShareBtn';

import headerTitleStyle from '../styles/header_title_style';
import Colors from '../../../constants/Colors';

const LocalePageRoute = {
  screen: getLocaleById(LocaleScreen),
  navigationOptions: ({ navigation }) => {
    const name = navigation.getParam('name');
    const message = `Check out ${name}!`;

    return {
      title: name,
      headerBackTitle: null,
      // headerTransparent: true,
      headerTintColor: Colors.headerTintColor,
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTitleStyle,

      headerRight: <ShareBtn message={message} style={{ paddingRight: 15 }} color="#2d3436" />,
    };
  },
};

export default LocalePageRoute;
