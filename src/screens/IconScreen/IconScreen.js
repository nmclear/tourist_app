import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Layout from '../../constants/Layout';
import formatData from '../../helpers/format_flat_list_data';
import IconTextBtn from '../../components/Buttons/IconTextBtn';

const NUM_COL = 3;

class IconScreen extends Component {
  getAnimationByCol = (column) => {
    switch (column) {
      case 1:
        return 'fadeInDownBig';
      case 2:
        return 'fadeInUpBig';
      case 3:
        return 'fadeInDownBig';
      default:
        return 'fadeIn';
    }
  };

  renderIcons = (item, index) => {
    const { navigation } = this.props;

    const { itemStyle, invisibleItem } = styles;
    if (item.empty) {
      return <View style={[itemStyle, invisibleItem]} />;
    }
    const {
      name, label, type, key, category, color,
    } = item;
    const iconCol = (index % NUM_COL) + 1;
    const onPress = () => navigation.navigate('LocaleList', { title: label, group: key, category });
    return (
      <Animatable.View animation={this.getAnimationByCol(iconCol)} style={{ flex: 1 }}>
        <IconTextBtn
          raised
          reverse
          size={28}
          name={name}
          type={type}
          color={color || '#FFCC22'}
          onPress={onPress}
          label={label}
          style={{ itemStyle }}
        />
      </Animatable.View>
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
          renderItem={({ item, index }) => this.renderIcons(item, index)}
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
