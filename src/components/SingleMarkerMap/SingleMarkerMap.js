import React from 'react';
import { MapView } from 'expo';

import { zoomedDelta } from '../../constants/CoordDelta';

const SingleMarkerMap = (props) => {
  const {
    markerName, coordinate, mapHeight, zoomable, scrollable,
  } = props;
  return (
    <MapView
      style={{ flex: 1, height: mapHeight || 150 }}
      initialRegion={{ ...coordinate, ...zoomedDelta }}
      scrollEnabled={scrollable}
      zoomEnabled={zoomable}
      rotateEnabled={false}
      loadingEnabled
      showsUserLocation
      paddingAdjustmentBehavior="automatic"
    >
      <MapView.Marker coordinate={coordinate} title={markerName} />
    </MapView>
  );
};

export default SingleMarkerMap;
