import React, { Component } from 'react';
import {
  ActivityIndicator, View, FlatList, StyleSheet, Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import MiniCard from '../../components/MiniCard';

class ListScreen extends Component {
  renderItem = (locale, index) => {
    const { navigation } = this.props;
    const {
      id, name, uri, tagline,
    } = locale;

    const onPress = () => navigation.navigate('LocalePage', { id, name });
    return (
      <Animatable.View
        animation={index % 2 === 0 ? 'fadeInLeftBig' : 'fadeInRightBig'}
        style={{ flex: 1 }}
        duration={700}
      >
        <MiniCard
          rounded
          shadow
          arrow
          id={id}
          title={name}
          subtitle={tagline}
          uri={uri}
          onPress={onPress}
        />
      </Animatable.View>
    );
  };

  render() {
    const { error, loading, locales } = this.props;
    const { container } = styles;

    if (error) return <View style={container} />;

    if (loading) {
      return (
        <View style={[container, { justifyContent: 'center' }]}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={container}>
        <FlatList
          data={locales}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={item => item.id.toString()}
          initialNumToRender={10}
          ListEmptyComponent={<Text>Empty List</Text>}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
});

export default ListScreen;
