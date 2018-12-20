import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import MiniCard from '../MiniCard';

// import data from '../../dummyData/food';

class LocaleList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  renderItem = (locale) => {
    const { navigation } = this.props;

    const {
      id, name, type, uri,
    } = locale;

    const onPress = () => navigation.navigate('LocalePage', { locale });
    return <MiniCard id={id} title={name} subtitle={type} uri={uri} onPress={onPress} />;
  };

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('listData', []);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={10}
        />
      </View>
    );
  }
}

export default LocaleList;
