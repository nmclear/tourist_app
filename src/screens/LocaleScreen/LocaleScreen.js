import React, { Component } from 'react';
import {
  ScrollView, View, Text, Linking, Platform,
} from 'react-native';

import { Badge } from 'react-native-elements';

import { compose } from 'react-apollo';

import getAllEateriesQuery from '../../graphql/queries/eateries/get_all_eateries';

import TilePageHeader from '../../components/TilePageHeader';
import LgBlackBtn from '../../components/Buttons/LgBlackBtn';
import ContactBar from '../../components/ContactBar';
import OpenTableBtn from '../../components/Buttons/OpenTableBtn';
import SingleMarkerMap from '../../components/SingleMarkerMap';

import styles from './styles';

class LocaleScreen extends Component {
  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: '#fff',
    headerStyle: {
      borderBottomWidth: 0,
    },
  };

  renderGroupBadges = groups => groups.map(group => (
    <Badge
      key={group}
      textStyle={{ color: '#fff' }}
      containerStyle={{
        // flex: 1,
        backgroundColor: '#5AC8FA',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        minWidth: 70,
        marginHorizontal: 20,
      }}
    >
      <Text style={{ color: '#fff' }}>{group}</Text>
    </Badge>
  ));

  render() {
    // const { navigation } = this.props;
    // const locale = navigation.getParam('locale');

    const { error, loading, eateries } = this.props;

    if (error) return <View />;
    if (loading) return <View />;

    const {
      id, uri, name, description, location, contact, groups, category,
    } = eateries[0];

    const {
      phone, email, website, hours,
    } = contact;
    const opentable = 'https://www.opentable.com/red-ginger-of-traverse-city';
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
        <ScrollView>
          <View style={textBox}>
            <Text style={headerStyle}>{`About ${name}`}</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-start',
                marginBottom: 10,
              }}
            >
              {this.renderGroupBadges(groups)}
            </View>

            <Text style={descrStyle}>{description}</Text>
          </View>
          {opentable && <OpenTableBtn link={opentable} />}

          <View>
            <Text style={{ textAlign: 'center', marginVertical: 10 }}>
              {`${address} ${city}, ${state} ${zipcode}`}
            </Text>
            <SingleMarkerMap
              scrollable={false}
              zoomable={false}
              markerName={name}
              coordinate={coordinate}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// export default LocaleScreen;
export default getAllEateriesQuery(LocaleScreen);
