import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { string, func, node } from 'prop-types';

const propTypes = {
  color: string.isRequired,
  onPress: func.isRequired,
  children: node.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8,
    marginVertical: 2,
    marginHorizontal: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    // shadowColor: '#2d3436',
    shadowColor: '#b2bec3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,
  },
});

const FlexBtn = ({ color, onPress, children }) => (
  <TouchableOpacity
    style={[styles.container, styles.shadow, { backgroundColor: color }]}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

FlexBtn.propTypes = propTypes;

export default FlexBtn;
