import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import icons from '../constants/icons/pages/restaurantIcons';
import Layout from '../constants/Layout';
import formatData from '../helpers/format_flat_list_data';
import IconWithText from '../components/IconWithText';

const NUM_COL = 3;

class RestaurantScreen extends Component {
  static navigationOptions = {
    title: 'Restaurant',
  };

  renderIcons = ({ item }) => {
    const { itemStyle, invisibleItem } = styles;
    if (item.empty) {
      return <View style={[itemStyle, invisibleItem]} />;
    }
    const {
      name, onPress, label, type, key,
    } = item;
    return (
      <IconWithText
        name={name}
        type={type}
        color="#616D7E"
        onPress={onPress}
        label={label}
        style={{ itemStyle }}
      />
    );
  };

  render() {
    const { container, listStyle } = styles;

    return (
      <View style={container}>
        <FlatList
          style={listStyle}
          data={formatData(icons, NUM_COL)}
          renderItem={item => this.renderIcons(item)}
          numColumns={NUM_COL}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listStyle: {
    marginTop: 10,
    marginHorizontal: 1,
    paddingHorizontal: 5,
  },
  itemStyle: {
    width: Layout.window.width / NUM_COL,
  },
  invisibleItem: {
    backgroundColor: 'transparent',
    width: Layout.window.width / NUM_COL,
  },
});

export default RestaurantScreen;
