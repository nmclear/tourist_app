import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';
import { string } from 'prop-types';
import { BtnText } from '../Texts';

const propTypes = {
  group: string.isRequired,
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 6,
    minWidth: 70,
    marginHorizontal: 7,
    marginBottom: 2,
    // borderColor: '#2d3436',
    borderColor: 'rgba(45, 52, 54, 0.6)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  shadow: {
    shadowColor: '#2d3436',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3,
  },
});

const GroupBadge = ({ group }) => {
  const { containerStyle, shadow } = styles;
  return (
    <Badge key={group} containerStyle={[containerStyle, shadow]}>
      <BtnText style={{ fontSize: 12 }}>{group}</BtnText>
    </Badge>
  );
};

GroupBadge.propTypes = propTypes;

export default GroupBadge;
