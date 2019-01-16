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
      return <View style={[invisibleItem]} />;
    }
    const {
      name, label, type, key, category, color,
    } = item;

    const iconCol = (index % NUM_COL) + 1;
    let { onPress } = item;

    if (key === 'WEATHER') {
      onPress = () => navigation.navigate('WeatherApp');
    } else if (key === 'ABOUT') {
      onPress = () => navigation.navigate('AboutScreen');
    } else if (!onPress) {
      onPress = () => navigation.navigate('LocaleList', { title: label, group: key, category });
    }

    return (
      <Animatable.View animation={this.getAnimationByCol(iconCol)} style={{ flex: 1 }}>
        <IconTextBtn
          // reverse
          // raised
          size={40}
          name={name}
          type={type}
          color={color || '#00b894'}
          onPress={onPress}
          label={label}
          style={itemStyle}
        />
      </Animatable.View>
    );
  };

  render() {
    const { container } = styles;
    const { icons } = this.props;

    return (
      <View style={container}>
        <FlatList
          data={formatData(icons, NUM_COL)}
          renderItem={({ item, index }) => this.renderIcons(item, index)}
          numColumns={NUM_COL}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    paddingLeft: 12,
  },
  ogStyle: {
    paddingVertical: 3,
    width: Layout.window.width / NUM_COL,
  },
  itemStyle: {
    width: Layout.window.width / NUM_COL - 20,
    height: Layout.window.width / NUM_COL - 20,
    marginVertical: 7,
    backgroundColor: '#fff',
    borderRadius: 10,

    shadowColor: '#b2bec3',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
    elevation: 3,

    borderColor: 'rgba(45, 52, 54, 0.1)',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  invisibleItem: {
    backgroundColor: 'transparent',
    // paddingVertical: 5,
    marginVertical: 4,
    height: Layout.window.width / NUM_COL - 20,
    width: Layout.window.width / NUM_COL - 20,
  },
});

export default IconScreen;
