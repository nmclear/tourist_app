import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginVertical: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const IconTextRow = (props) => {
  const {
    color, iconName, iconType, text, onPress,
  } = props;
  const { container } = styles;

  const textComponent = <Text style={{ marginLeft: 7, fontSize: 14 }}>{text}</Text>;

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
