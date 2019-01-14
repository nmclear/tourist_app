import React from 'react';
import {
  Text, View, TouchableOpacity, Platform,
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { propTypes, defaultProps } from './propTypes';
import styles from './styles';
import Colors from '../../constants/Colors';

const MiniCard = (props) => {
  const {
    id,
    title,
    subtitle,
    uri,
    onPress,
    titleStyle,
    subtitleStyle,
    cardColor,
    rounded,
    arrow,
  } = props;
  const {
    container, textContainer, leftGroup, iosShadow, androidShadow, arrowStyle,
  } = styles;

  const propsContainerStyle = {
    backgroundColor: cardColor,
    borderRadius: rounded ? 25 : 0,
    marginHorizontal: rounded ? 5 : 0,
  };

  return (
    <TouchableOpacity
      key={id}
      style={[container, Platform.OS === 'ios' ? iosShadow : androidShadow, propsContainerStyle]}
      onPress={onPress}
    >
      <View style={leftGroup}>
        <Avatar large rounded source={{ uri }} activeOpacity={0.7} />
        <View style={textContainer}>
          <Text style={[{ fontSize: 20, color: Colors.textDefault }, titleStyle]}>{title}</Text>
          <Text style={[{ fontSize: 14, color: Colors.textDefault }, subtitleStyle]}>
            {subtitle}
          </Text>
        </View>
      </View>

      <Icon
        name="arrow-right"
        type="simple-line-icon"
        color="#2d3436"
        size={14}
        containerStyle={[arrowStyle, { display: arrow ? 'flex' : 'none' }]}
      />
    </TouchableOpacity>
  );
};

MiniCard.propTypes = propTypes;
MiniCard.defaultProps = defaultProps;

export default MiniCard;
