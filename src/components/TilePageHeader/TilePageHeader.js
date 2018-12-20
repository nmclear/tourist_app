import React from 'react';
import { Tile } from 'react-native-elements';
import PropTypes from 'prop-types';

const TilePageHeader = ({
  uri, title, caption, height,
}) => (
  <Tile
    featured
    adjustsFontSizeToFit="true"
    activeOpacity={1}
    imageSrc={{ uri }}
    title={title}
    caption={caption}
    height={height}
    titleStyle={{ fontSize: 30, fontWeight: 'bold' }}
    captionStyle={{ fontSize: 20, fontWeight: '500' }}
  />
);

TilePageHeader.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  height: PropTypes.number,
};

TilePageHeader.defaultProps = {
  height: 140,
};

export default TilePageHeader;
