import React from 'react';
import { View, Text } from 'react-native';
import { string } from 'prop-types';

import styles from './styles';

const propTypes = {
  color: string,
  text: string.isRequired,
  textColor: string,
};

const defaultProps = {
  color: '#E1E1E1',
  textColor: '#717171',
};

const PageDivider = ({ color, text, textColor }) => {
  const { container, textStyle } = styles;
  return (
    <View style={[container, { backgroundColor: color }]}>
      <Text style={[textStyle, { color: textColor }]}>{text}</Text>
    </View>
  );
};

PageDivider.propTypes = propTypes;
PageDivider.defaultProps = defaultProps;

export default PageDivider;
