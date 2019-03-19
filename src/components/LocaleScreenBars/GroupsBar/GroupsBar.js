import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';
import { BtnText } from '../../Texts';

import styles from './styles';

class GroupsBar extends Component {

  formatGroups = groups => groups.map(group => ({
    key: group,
    name: group.replace('_', ' '),
  }))

  renderGroups = ({ key, name }) => {
    const { badgeContainerStyle, badgeShadowStyle } = styles;
    return (
      <Badge key={key} containerStyle={[badgeContainerStyle, badgeShadowStyle]}>
        <BtnText style={{ fontSize: 12 }}>{name}</BtnText>
      </Badge>
    );
  }

  render(){
    const { groups } = this.props;
    return (
      <View style={{ backgroundColor: 'white', paddingBottom: 5 }}>
        <FlatList
          horizontal
          data={this.formatGroups(groups)}
          renderItem={({ item }) => this.renderGroups(item)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flex: groups.length <= 3 ? 1 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>
    )
  }
}

export default GroupsBar;
