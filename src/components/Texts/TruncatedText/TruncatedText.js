import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import BodyText from '../BodyText';

class TruncatedText extends Component {
  state = {
    showfullText: false,
    showReadMore: true,
  };

  getShowMoreStatus = ({ nativeEvent }) => {
    const limitedHeight = nativeEvent.layout.height;

    // 96 is the height for 5 lines.
    // add function to determine the height of lines
    if (limitedHeight >= 96) {
      this.setState({ showReadMore: true });
    } else {
      this.setState({ showReadMore: false });
    }
  };

  renderShowMoreBtn = () => {
    const { showfullText } = this.state;
    const { showMoreTextStyle } = this.props;
    return (
      <TouchableOpacity
        style={{ paddingTop: 3 }}
        onPress={() => this.setState({ showfullText: !showfullText })}
      >
        <BodyText style={[{ color: '#007AFF', fontSize: 16 }, showMoreTextStyle]}>
          {showfullText ? 'Read Less...' : 'Read More...'}
        </BodyText>
      </TouchableOpacity>
    );
  };

  render() {
    const {
      textStyle, containerStyle, numberOfLines, children,
    } = this.props;
    const { showfullText, showReadMore } = this.state;
    return (
      <View style={containerStyle}>
        <BodyText
          onLayout={this.getShowMoreStatus}
          style={textStyle}
          numberOfLines={showfullText ? 0 : numberOfLines}
        >
          {children}
        </BodyText>
        {showReadMore && this.renderShowMoreBtn()}
      </View>
    );
  }
}

export default TruncatedText;
