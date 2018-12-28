import React, { Component } from 'react';
import { View } from 'react-native';

import LocaleList from '../../components/LocaleList';

// import getEateriesByGroupQuery from '../../graphql/queries/eateries/get_eateries_by_group';
// import getLocalesByGroup from '../../graphql/queries/get_locales_by_group';

class LocaleScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  render() {
    const {
      navigation, error, loading, locales,
    } = this.props;

    // console.log(navigation);

    if (error) return <View />;
    if (loading) return <View />;

    console.log(locales);

    return (
      <View style={{ flex: 1 }}>
        <LocaleList locales={locales} navigation={navigation} />
      </View>
    );
  }
}

export default LocaleScreen;
// export default getEateriesByGroupQuery(LocaleScreen);
// export default getLocalesByGroup(LocaleScreen);
