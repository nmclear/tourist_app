import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
// `${address} ${city}, ${state} ${zipcode}`
const IconTextRow = (props) => {
  const {
    color, iconName, iconType, text,
  } = props;
  const { container } = styles;

  return (
    <View style={container}>
      <Icon name={iconName} type={iconType} size={16} color="black" />
      <Text style={{ marginLeft: 7, fontSize: 14 }}>{text}</Text>
    </View>
  );
};

export default IconTextRow;
