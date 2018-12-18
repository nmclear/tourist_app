import React from 'react';
import { MapView } from 'expo';

// import { Marker } from MapView;

const markers = [
    {
        id: 0,
        title: '7 Monks',
        description: 'Craft beer cafe',
        coordinate:{ latitude: 44.763105, longitude: -85.623937 },
        onPress: () => {}
    },
    {
        id: 1,
        title: 'Little Fleet',
        description: 'Outdoor eating and drink venue',
        coordinate:{ latitude: 44.764018, longitude: -85.613693 },
        onPress: () => {}
    },
]

export default class App extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
            latitude: 44.7631,
            longitude: -85.6206,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0211,
          }}
      >
          {markers.map(marker => (
            <MapView.Marker
                key={marker.id}
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
                onCalloutPress={marker.onPress}
            />
          ))}
          
      </MapView>
    );
  }
}