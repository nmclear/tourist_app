import React from 'react';
import {
  TouchableOpacity, Image, Text, StyleSheet,
} from 'react-native';
import { WebBrowser } from 'expo';

import { string } from 'prop-types';

import logo from './opentable_logo.png';

const propTypes = {
  link: string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    marginVertical: 2,
    marginHorizontal: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DA3743',
  },
});

const OpenTableBtn = ({ link }) => (
  <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(link)} style={styles.container}>
    <Text style={{ color: 'white', fontSize: 18 }}>Book with </Text>
    <Image source={logo} style={{ height: 30, width: 129 }} />
  </TouchableOpacity>
);

OpenTableBtn.propTypes = propTypes;

export default OpenTableBtn;
