// import React from 'react';
// import { StyleSheet, TouchableOpacity } from 'react-native';
// import { Icon } from 'react-native-elements';

// import { string, func, number } from 'prop-types';

// const propTypes = {
//   color: string.isRequired,
//   name: string.isRequired,
//   onPress: func.isRequired,
//   type: string,
//   size: number,
//   iconColor: string,
// };

// const defaultProps = {
//   type: 'material',
//   size: 28,
//   iconColor: 'white',
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingVertical: 8,
//     marginVertical: 2,
//     marginHorizontal: 12,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// const FlexIconBtn = (props) => {
//   const {
//     color, name, type, size, onPress, iconColor,
//   } = props;

//   return (
//     <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
//       <Icon size={size} color={iconColor} name={name} type={type} />
//     </TouchableOpacity>
//   );
// };

// FlexIconBtn.propTypes = propTypes;
// FlexIconBtn.defaultProps = defaultProps;

// export default FlexIconBtn;

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { string, func, number } from 'prop-types';
import FlexBtn from '../FlexBtn';

const propTypes = {
  color: string.isRequired,
  name: string.isRequired,
  onPress: func.isRequired,
  type: string,
  size: number,
  iconColor: string,
};

const defaultProps = {
  type: 'material',
  size: 28,
  iconColor: 'white',
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
  },
});

const FlexIconBtn = (props) => {
  const {
    color, name, type, size, onPress, iconColor,
  } = props;

  // return (
  //   <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
  //     <Icon size={size} color={iconColor} name={name} type={type} />
  //   </TouchableOpacity>
  // );

  return (
    <FlexBtn color={color} onPress={onPress}>
      <Icon size={size} color={iconColor} name={name} type={type} />
    </FlexBtn>
  );
};

FlexIconBtn.propTypes = propTypes;
FlexIconBtn.defaultProps = defaultProps;

export default FlexIconBtn;
