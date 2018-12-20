import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import icons from '../constants/icons/pages/exploreIcons';
import Layout from '../constants/Layout';
import formatData from '../helpers/format_flat_list_data';
import IconTextBtn from '../components/Buttons/IconTextBtn';

import listData from '../dummyData/explore';

const NUM_COL = 3;

class ExploreScreen extends Component {
  static navigationOptions = {
    title: 'Explore',
  };

  renderIcons = ({ item }) => {
    const { itemStyle, invisibleItem } = styles;
    if (item.empty) {
      return <View style={[itemStyle, invisibleItem]} />;
    }
    const {
      name, onPress, label, type, key,
    } = item;
    const { navigation } = this.props;
    return (
      <IconTextBtn
        name={name}
        type={type}
        color="#616D7E"
        // onPress={onPress}
        onPress={() => navigation.navigate('ExploreList', { listData, title: label })}
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

export default ExploreScreen;
