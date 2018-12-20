import React from 'react';
import {
  MapView, Constants, Location, Permissions,
} from 'expo';

import { View, Text } from 'react-native';

// import { Marker } from MapView;
import TC_LOCATION from '../../constants/TCLocation';

const markers = [
  {
    id: 0,
    title: '7 Monks',
    description: 'Craft beer cafe',
    coordinate: { latitude: 44.763105, longitude: -85.623937 },
    onPress: () => {},
  },
  {
    id: 1,
    title: 'Little Fleet',
    description: 'Outdoor eating and drink venue',
    coordinate: { latitude: 44.764018, longitude: -85.613693 },
    onPress: () => {},
  },
];

class LocaleMap extends React.Component {
  state = {
    location: TC_LOCATION,
    loadingLocation: true,
    errorMessage: null,
  };

  // componentDidMount() {
  //   this.getUserLocation();
  // }

  // getUserLocation = async () => {
  //   const { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== 'granted') {
  //     this.setState({
  //       location: TC_LOCATION,
  //       errorMessage: 'Permission to access location was denied',
  //       loadingLocation: false,
  //     });
  //   }

  //   const {
  //     coords: { longitude, latitude },
  //   } = await Location.getCurrentPositionAsync({});

  //   const location = {
  //     latitude,
  //     longitude,
  //     latitudeDelta: 0.0422,
  //     longitudeDelta: 0.0211,
  //   };
  //   this.setState({ location, loadingLocation: false });
  // };

  render() {
    const { location, errorMessage, loadingLocation } = this.state;
    const { followUserLocation } = this.props;
    // if (loadingLocation) {
    //   return (
    //     <View>
    //       <Text>Loading...</Text>
    //     </View>
    //   );
    // }
    console.log('==================');
    console.log(followUserLocation);
    console.log('==================');

    return (
      <MapView
        style={{ flex: 1 }}
        // initialRegion={location}
        region={!followUserLocation ? location : null}
        loadingEnabled
        showsUserLocation
        followsUserLocation={followUserLocation}
        // followsUserLocation
        paddingAdjustmentBehavior="automatic"
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

export default LocaleMap;
