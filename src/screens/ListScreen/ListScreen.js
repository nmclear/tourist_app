import React from 'react';
import { View } from 'react-native';

import LocaleList from '../../components/LocaleList';

const ListScreen = (props) => {
  const {
    navigation, error, loading, locales,
  } = props;

  if (error) return <View />;
  if (loading) return <View />;

  return (
    <View style={{ flex: 1 }}>
      <LocaleList locales={locales} navigation={navigation} />
    </View>
  );
};

export default ListScreen;
