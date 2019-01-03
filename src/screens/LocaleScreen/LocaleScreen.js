import React, { Component } from 'react';
import {
  ScrollView, View, Text, FlatList,
} from 'react-native';

import { Badge, Icon } from 'react-native-elements';

import { getDayOfWeek, formatPhoneNumber } from '../../helpers';

import TilePageHeader from '../../components/TilePageHeader';
import ContactBar from '../../components/ContactBar';
import OpenTableBtn from '../../components/Buttons/OpenTableBtn';
import SingleMarkerMap from '../../components/SingleMarkerMap';
import TruncatedText from '../../components/TruncatedText';
import PageDivider from '../../components/PageDivider';
import IconTextRow from '../../components/IconTextRow';

import UberBtn from '../../components/Buttons/UberBtn';
import GroupBadge from '../../components/GroupBadge';

import styles from './styles';

class LocaleScreen extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: '#fff',
    headerStyle: {
      borderBottomWidth: 0,
    },
  };

  formatTodaysHours = (hours) => {
    const day = getDayOfWeek();
    const { open, close } = hours[day];
    const hour = `${day} Hours: ${open} - ${close}`;
    // return <Text>{hour}</Text>;
    return hour;
  };

  render() {
    const { navigation } = this.props;
    // const locale = navigation.getParam('id');

    const { error, loading, locale } = this.props;

    if (error) return <View />;
    if (loading) return <View />;

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

    const todayHours = this.formatTodaysHours(weekdayHours);

    const {
      address, city, state, zipcode, coordinate,
    } = location;

    const {
      container, textBox, descrStyle, headerStyle,
    } = styles;

    return (
      <View style={container} key={id}>
        <View>
          <TilePageHeader uri={uri} title={name} caption={category} height={160} />
          <ContactBar phone={phone} coordinate={coordinate} website={website} />
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
          <View style={textBox}>
            <Text style={headerStyle}>{`About ${name}`}</Text>

            <FlatList
              horizontal
              data={formattedGroups}
              renderItem={({ item }) => <GroupBadge key={item.key} group={item.name} />}
              showsHorizontalScrollIndicator={false}
              style={{ marginVertical: 5 }}
              contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            />

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
            />
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
              <IconTextRow iconName="clock" iconType="simple-line-icon" text={todayHours} />
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
          <UberBtn name={name} location={location} />
        </ScrollView>
      </View>
    );
  }
}

export default LocaleScreen;
