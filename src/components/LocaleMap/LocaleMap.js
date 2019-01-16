import React from 'react';
import {
  MapView, Constants, Location, Permissions,
} from 'expo';

import { View, Text } from 'react-native';

import TC_LOCATION from '../../constants/TCLocation';

class LocaleMap extends React.Component {
  state = {
    currentLocation: TC_LOCATION,
    loadingLocation: true,
    errorMessage: null,
    region: TC_LOCATION,
    mapLoaded: false,
  };

  componentDidMount() {
    // this.getUserLocation();
    this.setState({ mapLoaded: true });
  }

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
    const {
      currentLocation, mapLoaded, errorMessage, loadingLocation,
    } = this.state;
    const {
      followUserLocation, markers, onMarkerPress, mapContainerStyle,
    } = this.props;

    return (
      <MapView
        style={[{ flexGrow: 1 }, mapContainerStyle]}
        region={!followUserLocation ? currentLocation : null}
        loadingEnabled
        showsUserLocation
        followsUserLocation={followUserLocation}
        paddingAdjustmentBehavior="automatic"
        // provider={MapView.PROVIDER_GOOGLE}
        // customMapStyle={MapStyle}
      >
        {markers.map((marker) => {
          const {
            id, name, location, tagline,
          } = marker;

          return (
            <MapView.Marker
              key={id}
              coordinate={location.coordinate}
              title={name}
              description={tagline}
              loadingEnabled
              onCalloutPress={() => onMarkerPress(id, name)}
            />
          );
        })}
      </MapView>
    );
  }
}

export default LocaleMap;
