import React, { Component } from 'react';

import { Share, Platform } from 'react-native';

import IconBtn from '../IconBtn';

class ShareBtn extends Component {
  onShare = async () => {
    const { message } = this.props;
    try {
      return await Share.share({
        message,
      });
    } catch (error) {
      return error.message;
    }
  };

  render() {
    return (
      <IconBtn
        name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'}
        type="evilicon"
        onPress={this.onShare}
        {...this.props}
      />
    );
  }
}

export default ShareBtn;
