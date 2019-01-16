import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { BodyText } from '../Texts';
import { propTypes, defaultProps } from './propTypes';
import styles from './styles';

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
    shadow,
    arrow,
  } = props;
  const {
    container, textContainer, leftGroup, shadowStyle, arrowStyle,
  } = styles;

  const propsShadow = shadow ? shadowStyle : null;

  const propsContainerStyle = {
    backgroundColor: cardColor,
    borderRadius: rounded ? 25 : 0,
    marginHorizontal: rounded ? 5 : 0,
    ...propsShadow,
  };

  return (
    <TouchableOpacity key={id} style={[container, propsContainerStyle]} onPress={onPress}>
      <View style={leftGroup}>
        <Avatar large rounded source={{ uri }} activeOpacity={0.7} />
        <View style={textContainer}>
          <BodyText style={[{ fontSize: 20 }, titleStyle]}>{title}</BodyText>
          <BodyText style={[{ fontSize: 14 }, subtitleStyle]}>{subtitle}</BodyText>
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
