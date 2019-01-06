import React, { Component } from 'react';
import {
  ScrollView, View, Text, FlatList, Image,
} from 'react-native';
import { WebBrowser } from 'expo';
import { SocialIcon } from 'react-native-elements';

import { getDayOfWeek, formatPhoneNumber } from '../../helpers';

import TilePageHeader from '../../components/TilePageHeader';
// <TilePageHeader uri={uri} title={name} caption={category} height={160} />

import ContactBar from '../../components/ContactBar';
import OpenTableBtn from '../../components/Buttons/OpenTableBtn';
import SingleMarkerMap from '../../components/SingleMarkerMap';
import TruncatedText from '../../components/TruncatedText';
import PageDivider from '../../components/PageDivider';
import IconTextRow from '../../components/IconTextRow';

import UberBtn from '../../components/Buttons/UberBtn';
import LyftBtn from '../../components/Buttons/LyftBtn';
import MapBtn from '../../components/Buttons/MapBtn';

import GroupBadge from '../../components/GroupBadge';

import FullMapModal from '../../components/FullMapModal';

import Layout from '../../constants/Layout';

import styles from './styles';

class LocaleScreen extends Component {
  state = {
    mapModalVisible: false,
  };

  formatTodaysHours = (hours) => {
    const day = getDayOfWeek();
    const { open, close } = hours[day];
    return `${day} Hours: ${open} - ${close}`;
  };

  openModal = () => this.setState({ mapModalVisible: true });

  closeModal = () => this.setState({ mapModalVisible: false });

  render() {
    const { error, loading, locale } = this.props;

    if (error) return <View />;
    if (loading) return <View />;
    const { mapModalVisible } = this.state;
    const {
      id, uri, name, description, location, contact, groups, category,
    } = locale;

    const formattedGroups = groups.map(group => ({
      key: group,
      name: group.replace('_', ' '),
    }));

    const {
      phone, email, website, weekdayHours, opentable,
    } = contact;

    const {
      address, city, state, zipcode, coordinate,
    } = location;

    const {
      container, textBox, descrStyle, headerStyle,
    } = styles;
    // <View>
    //       <ContactBar phone={phone} coordinate={coordinate} website={website} />
    //     </View>
    return (
      <View style={container} key={id}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
          stickyHeaderIndices={[2]}
        >
          <Image source={{ uri }} style={{ height: 180, width: Layout.window.width }} />
          <View style={[textBox, { paddingBottom: 0 }]}>
            <Text style={headerStyle}>{name}</Text>
          </View>
          <View style={{ backgroundColor: 'white', paddingBottom: 5 }}>
            <FlatList
              horizontal
              data={formattedGroups}
              renderItem={({ item }) => <GroupBadge key={item.key} group={item.name} />}
              showsHorizontalScrollIndicator={false}
              // style={{ marginVertical: 5 }}
              contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            />
          </View>
          <View style={[textBox, { paddingTop: 5 }]}>
            <TruncatedText textStyle={descrStyle} numberOfLines={5}>
              {description}
            </TruncatedText>
          </View>

          <View>
            <PageDivider text="Location" />

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
          <PageDivider text="How to get There" />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingVertical: 7,
              paddingHorizontal: 20,
            }}
          >
            <UberBtn name={name} location={location} />
            <MapBtn coordinate={coordinate} color="#1fbad6" />
            <LyftBtn name={name} location={location} />
          </View>

          <PageDivider text="Details" />
          <View style={{ marginBottom: 5 }}>
            {phone && (
              <IconTextRow
                iconName="phone"
                iconType="simple-line-icon"
                text={formatPhoneNumber(phone)}
              />
            )}
            {weekdayHours && (
              <IconTextRow
                iconName="clock"
                iconType="simple-line-icon"
                text={this.formatTodaysHours(weekdayHours)}
              />
            )}
            {website && (
              <IconTextRow
                iconName="screen-smartphone"
                iconType="simple-line-icon"
                text={website}
              />
            )}
            {email && <IconTextRow iconName="envelope" iconType="simple-line-icon" text={email} />}
          </View>
          {opentable && (
            <View style={{ marginBottom: 5 }}>
              <OpenTableBtn link={opentable} />
            </View>
          )}
          <PageDivider text="Social" />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingVertical: 7,
              paddingHorizontal: 20,
            }}
          >
            <SocialIcon
              iconSize={35}
              raised
              type="facebook"
              onPress={() => WebBrowser.openBrowserAsync(website)}
            />
            <SocialIcon
              iconSize={35}
              raised
              type="twitter"
              onPress={() => WebBrowser.openBrowserAsync(website)}
            />
            <SocialIcon
              iconSize={35}
              raised
              type="instagram"
              onPress={() => WebBrowser.openBrowserAsync(website)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default LocaleScreen;
