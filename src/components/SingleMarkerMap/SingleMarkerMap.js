import React from 'react';
import { MapView } from 'expo';
import { Platform } from 'react-native';

import { zoomedDelta } from '../../constants/CoordDelta';

const SingleMarkerMap = (props) => {
  const {
    markerName, coordinate, mapHeight, zoomable, scrollable, onPress,
  } = props;
  return (
    <MapView
      style={{ height: mapHeight || 150 }}
      initialRegion={{ ...coordinate, ...zoomedDelta }}
      scrollEnabled={scrollable}
      zoomEnabled={zoomable}
      rotateEnabled={false}
      loadingEnabled
      showsUserLocation
      paddingAdjustmentBehavior="automatic"
      onPress={onPress}
      cacheEnabled={Platform.OS === 'android'}
    >
      <MapView.Marker coordinate={coordinate} title={markerName} />
    </MapView>
  );
};

export default SingleMarkerMap;
