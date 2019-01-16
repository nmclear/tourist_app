import { string, func, bool } from 'prop-types';
import { ViewPropTypes } from 'react-native';

export const propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  uri: string.isRequired,
  onPress: func.isRequired,
  titleStyle: ViewPropTypes.style,
  subtitleStyle: ViewPropTypes.style,
  cardColor: string,
  rounded: bool,
  shadow: bool,
  arrow: bool,
};

export const defaultProps = {
  cardColor: 'white',
  titleStyle: {},
  subtitleStyle: {},
  shadow: true,
  rounded: false,
  arrow: false,
};
