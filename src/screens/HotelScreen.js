import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import icons from '../constants/icons/pages/hotelIcons';
import Layout from '../constants/Layout';
import formatData from '../helpers/format_flat_list_data';
import IconTextBtn from '../components/Buttons/IconTextBtn';

import listData from '../dummyData/food';

const NUM_COL = 3;

class HotelScreen extends Component {
  static navigationOptions = {
    title: 'Hotels',
  };

  renderIcons = ({ item }) => {
    const { navigation } = this.props;
    const { itemStyle, invisibleItem } = styles;
    if (item.empty) {
      return <View style={[itemStyle, invisibleItem]} />;
    }
    const {
      name, onPress, label, type, key,
    } = item;
    return (
      <IconTextBtn
        name={name}
        type={type}
        color="#616D7E"
        // onPress={onPress}
        onPress={() => navigation.navigate('HotelList', { title: label, group: key, category: 'HOTEL' })
        }
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
    paddingTop: 10,
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

export default HotelScreen;
