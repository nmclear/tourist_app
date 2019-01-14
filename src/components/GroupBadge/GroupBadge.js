import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';
import { string } from 'prop-types';
import Colors from '../../constants/Colors';

const propTypes = {
  group: string.isRequired,
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    minWidth: 70,
    marginHorizontal: 7,
    marginBottom: 2,
    borderColor: '#2d3436',
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

  textStyle: {
    // color: '#0984e3',
    color: '#2d3436',

    fontWeight: '600',
  },
});

const GroupBadge = ({ group }) => {
  const { containerStyle, textStyle, shadow } = styles;
  return (
    <Badge key={group} textStyle={{ color: '#fff' }} containerStyle={[containerStyle, shadow]}>
      <Text style={textStyle}>{group}</Text>
    </Badge>
  );
};

GroupBadge.propTypes = propTypes;

export default GroupBadge;
