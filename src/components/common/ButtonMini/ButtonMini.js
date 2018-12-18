import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 4,
    paddingBottom: 4,
  },
  buttonStyle: {
    // flex: 1,
    width: 55,
    // alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
});

const ButtonMini = ({ title, onPress }) => {
  const { textStyle, buttonStyle } = styles;
  //   const { onPress, children } = props;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonMini;
