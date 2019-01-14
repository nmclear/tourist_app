import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebBrowser } from 'expo';
import FlexIconBtn from '../../Buttons/FlexIconBtn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

const SocialBar = ({ social }) => {
  const { facebook, twitter, instagram } = social;

  const { container } = styles;
  return (
    <View style={container}>
      {facebook && (
        <FlexIconBtn
          color="#3b5998"
          name="facebook"
          type="material-community"
          onPress={() => WebBrowser.openBrowserAsync(facebook)}
        />
      )}
      {twitter && (
        <FlexIconBtn
          color="#1DA1F2"
          name="twitter"
          type="material-community"
          onPress={() => WebBrowser.openBrowserAsync(twitter)}
        />
      )}
      {instagram && (
        <FlexIconBtn
          color="#c32aa3"
          name="instagram"
          type="material-community"
          onPress={() => WebBrowser.openBrowserAsync(instagram)}
        />
      )}
    </View>
  );
};

export default SocialBar;
