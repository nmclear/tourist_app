import React, { Component } from 'react';

import {
  Text, View, TouchableOpacity, FlatList, StyleSheet,
} from 'react-native';

import { HeaderText, BodyText } from '../Texts';

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 5,
    height: 60,
    width: 220,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#b2bec3',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,

    borderColor: 'rgba(45, 52, 54, 0.2)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

class LocaleScroll extends Component {
  state = {};

  renderItem = ({ id, name, tagline }) => {
    const { onItemPress } = this.props;

    return (
      <TouchableOpacity id={id} style={styles.itemContainer} onPress={() => onItemPress(id, name)}>
        <HeaderText small style={{ textAlign: 'center' }}>
          {name}
        </HeaderText>
        <BodyText style={{ fontSize: 12 }}>{tagline}</BodyText>
      </TouchableOpacity>
    );
  };

  render() {
    const { data } = this.props;
    return (
      <FlatList
        style={{ flex: 1, marginVertical: 5, paddingVertical: 10 }}
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderItem(item)}
        contentContainerStyle={{
          flex: data.length === 1 ? 1 : 0,
          justifyContent: data.length === 1 ? 'center' : 'flex-start',
        }}
      />
    );
  }
}

export default LocaleScroll;
