import React, { Component } from 'react';
import { View } from 'react-native';

import IconTextRow from '../../IconTextRow';
import SingleMarkerMap from '../../SingleMarkerMap';
import FullMapModal from '../../FullMapModal';

class LocationBar extends Component {
  state = {
    mapModalVisible: false,
  };

  openModal = () => this.setState({ mapModalVisible: true });

  closeModal = () => this.setState({ mapModalVisible: false });

  render() {
    const { name, location } = this.props;
    const {
      address, city, state, zipcode, coordinate,
    } = location;
    const { mapModalVisible } = this.state;
    return (
      <View>
        <IconTextRow
          iconName="location-pin"
          iconType="simple-line-icon"
          text={`${address} ${city}, ${state} ${zipcode}`}
        />
        <SingleMarkerMap
          scrollable={false}
          zoomable={false}
          markerName={name}
          coordinate={coordinate}
          onPress={this.openModal}
        />
        <FullMapModal
          markerName={name}
          coordinate={coordinate}
          visible={mapModalVisible}
          onClose={this.closeModal}
        />
      </View>
    );
  }
}

export default LocationBar;
