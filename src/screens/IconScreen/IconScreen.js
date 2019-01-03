import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Layout from '../../constants/Layout';
import formatData from '../../helpers/format_flat_list_data';
import IconTextBtn from '../../components/Buttons/IconTextBtn';

const NUM_COL = 3;

class IconScreen extends Component {
  renderIcons = ({ item }) => {
    const { navigation } = this.props;

    const { itemStyle, invisibleItem } = styles;
    if (item.empty) {
      return <View style={[itemStyle, invisibleItem]} />;
    }
    const {
      name, label, type, key, category,
    } = item;

    const onPress = () => navigation.navigate('LocaleList', { title: label, group: key, category });
    return (
      <IconTextBtn
        // raised
        // reverse
        // size={28}
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
    const { icons } = this.props;

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
    paddingTop: 8,
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

export default IconScreen;