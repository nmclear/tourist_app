import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import MiniCard from '../MiniCard';

class LocaleList extends Component {
  renderItem = (locale) => {
    const { navigation } = this.props;

    const {
      id, name, groups, uri,
    } = locale;
    const groupString = groups.map(group => group.replace('_', ' ')).join(' - ');

    const onPress = () => navigation.navigate('LocalePage', { id });
    return <MiniCard id={id} title={name} subtitle={groupString} uri={uri} onPress={onPress} />;
  };

  render() {
    const { locales } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={locales}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={10}
        />
      </View>
    );
  }
}

export default LocaleList;
