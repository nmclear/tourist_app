import React, { Component } from 'react';
import { MapView } from 'expo';
import {
  Platform, View, Modal, StyleSheet,
} from 'react-native';

import IconBtn from '../Buttons/IconBtn';

import { zoomedDelta } from '../../constants/CoordDelta';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  closeBtnStyle: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 5,
    zIndex: 5,
    position: 'absolute',
  },
});

const FullMapModal = (props) => {
  const {
    markerName, coordinate, visible, onClose,
  } = props;

  const { closeBtnStyle } = styles;

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <IconBtn
        name={Platform.OS === 'ios' ? 'ios-close-circle-outline' : 'md-close-circle-outline'}
        type="ionicon"
        color="black"
        style={closeBtnStyle}
        onPress={onClose}
      />
      <MapView
        style={{ height: Layout.window.height }}
        initialRegion={{ ...coordinate, ...zoomedDelta }}
        rotateEnabled={false}
        loadingEnabled
        showsUserLocation
        onRequestClose={onClose}
        onDismiss={onClose}
        paddingAdjustmentBehavior="automatic"
      >
        <MapView.Marker coordinate={coordinate} title={markerName} />
      </MapView>
    </Modal>
  );
};

export default FullMapModal;
