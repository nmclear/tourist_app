import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

import { BodyText } from '../Texts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginVertical: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const IconTextRow = (props) => {
  const {
    color, iconName, iconType, text, onPress,
  } = props;
  const { container } = styles;

  const textComponent = <BodyText style={{ marginLeft: 6, fontSize: 14 }}>{text}</BodyText>;

  return (
    <View style={container}>
      <Icon name={iconName} type={iconType} size={16} color="black" />
      {onPress ? (
        <TouchableOpacity onPress={onPress}>{textComponent}</TouchableOpacity>
      ) : (
        textComponent
      )}
    </View>
  );
};

export default IconTextRow;
