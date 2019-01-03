import React from 'react';
import { View, Text } from 'react-native';
import { Badge } from 'react-native-elements';

const GroupBadge = (props) => {
  const { group } = props;
  return (
    <Badge
      key={group}
      textStyle={{ color: '#fff' }}
      containerStyle={{
        // flex: 1,
        backgroundColor: '#5AC8FA',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        minWidth: 70,
        marginHorizontal: 7,
      }}
    >
      <Text style={{ color: '#fff' }}>{group}</Text>
    </Badge>
  );
};

export default GroupBadge;
