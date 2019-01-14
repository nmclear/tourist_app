import React from 'react';
import { View, FlatList } from 'react-native';
import GroupBadge from '../../GroupBadge';

const formatGroups = groups => groups.map(group => ({
  key: group,
  name: group.replace('_', ''),
}));

const GroupsBar = ({ groups }) => (
  <View style={{ backgroundColor: 'white', paddingBottom: 5 }}>
    <FlatList
      horizontal
      data={formatGroups(groups)}
      renderItem={({ item }) => <GroupBadge key={item.key} group={item.name} />}
      showsHorizontalScrollIndicator={false}
      // style={{ marginVertical: 5 }}
      contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    />
  </View>
);

export default GroupsBar;
