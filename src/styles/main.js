import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const dimensions = {
  width,
  height,

  isSmallDevice: width < 375,
};

export const colors = {
  primary: '#226B74',
  secondary: '#254B5A',
  tertiary: '#5DA6A7',
  textDefault: '#2d3436',
  iconDefault: '#a3a3a3',
  tabIconDefault: '#ccc',
  tint: '#2f95dc',
  headerTint: '#2d3436',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  tabIconSelected: '#2f95dc',
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  xl: 40,
  primary: 'Cochin',
};

const tintColor = '#2f95dc';

export default {
  tabBar: '#fefefe',
  noticeBackground: tintColor,
  noticeText: '#fff',
};
