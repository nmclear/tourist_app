import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import ButtonMini from '../common/ButtonMini';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flex: 1,
    marginVertical: 0,
    marginHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  childrenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  }
});

const CardModal = (props) => {
  const {
    title, tagline, children, visible, onClosePress,
  } = props;
  const { container, wrapper, childrenContainer } = styles;
  return (
    <View style={[{ display: visible }]}>
      <Card title={title} containerStyle={container} wrapperStyle={wrapper}>
        <Text style={{ marginBottom: 10, textAlign: 'center' }}>{tagline}</Text>
        <View style={childrenContainer}>
            {children}
        </View>
        <ButtonMini title="close" onPress={onClosePress} />
      </Card>
    </View>
  );
};

export default CardModal;
