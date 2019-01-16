import React from 'react';
import { StyleSheet, TouchableOpacity, ViewPropTypes } from 'react-native';

import { string, func, node } from 'prop-types';

const propTypes = {
  color: string.isRequired,
  onPress: func.isRequired,
  children: node.isRequired,
  style: ViewPropTypes.style,
};

const defaultProps = {
  style: null,
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

    shadowColor: '#b2bec3',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,

    borderColor: 'rgba(45, 52, 54, 0.2)',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

const FlexBtn = (props) => {
  const {
    color, onPress, children, style,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }, style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

FlexBtn.propTypes = propTypes;
FlexBtn.defaultProps = defaultProps;

export default FlexBtn;
