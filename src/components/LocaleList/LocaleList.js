import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';

import MiniCard from '../MiniCard';

class LocaleList extends Component {
  renderItem = (locale, index) => {
    const { navigation } = this.props;
    const {
      id, name, groups, uri,
    } = locale;
    const groupString = groups.map(group => group.replace('_', ' ')).join(' - ');

    const onPress = () => navigation.navigate('LocalePage', { id, name });
    return (
      <Animatable.View
        animation={index % 2 === 0 ? 'fadeInLeftBig' : 'fadeInRightBig'}
        style={{ flex: 1 }}
        duration={700}
      >
        <MiniCard rounded id={id} title={name} subtitle={groupString} uri={uri} onPress={onPress} />
      </Animatable.View>
    );
  };

  render() {
    const { locales } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={locales}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={10}
        />
      </View>
    );
  }
}

export default LocaleList;
