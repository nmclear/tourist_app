import React, { Component } from 'react';
import {
  ScrollView, View, Text, Image, ActivityIndicator,
} from 'react-native';
import { WebBrowser } from 'expo';

import TilePageHeader from '../../components/TilePageHeader';
// <TilePageHeader uri={uri} title={name} caption={category} height={160} />

import ContactBar from '../../components/ContactBar';
import OpenTableBtn from '../../components/Buttons/OpenTableBtn';
import FlexBtn from '../../components/Buttons/FlexBtn';
import PageDivider from '../../components/PageDivider';
import IconTextRow from '../../components/IconTextRow';

import {
  HeaderText, BodyText, TruncatedText, BtnText,
} from '../../components/Texts';

import { EATERY } from '../../constants/categories';

import {
  GroupsBar,
  LocationBar,
  DetailsBar,
  DirectionBar,
  SocialBar,
} from '../../components/LocaleScreenBars';

import Layout from '../../constants/Layout';

import styles from './styles';

const LocaleScreen = ({ error, loading, locale }) => {
  if (error) return <View />;
  if (loading) {
    return (
      <View style={[{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }]}>
        <ActivityIndicator />
      </View>
    );
  }
  const {
    id, uri, name, description, location, contact, groups, category,
  } = locale;

  const {
    phone, email, website, weekdayHours, opentable, social, menu,
  } = contact;

  const {
    address, city, state, zipcode, coordinate,
  } = location;

  const { container, textBox, headerStyle } = styles;
  // <View>
  //       <ContactBar phone={phone} coordinate={coordinate} website={website} />
  //     </View>
  return (
    <View style={container} key={id}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        stickyHeaderIndices={[2]}
        // bounces={false}
      >
        {uri && <Image source={{ uri }} style={{ height: 180, width: Layout.window.width }} />}

        <View style={[textBox, { paddingTop: 10, paddingBottom: 0 }]}>
          <HeaderText style={headerStyle}>{name}</HeaderText>
        </View>

        {groups && <GroupsBar groups={groups} />}

        {description && (
          <View style={[textBox, { paddingTop: 5 }]}>
            <TruncatedText textStyle={{ textAlign: 'justify' }} numberOfLines={5}>
              {description}
            </TruncatedText>
          </View>
        )}

        {location && (
          <View>
            <PageDivider text="Location" />
            <LocationBar name={name} location={location} />
            <PageDivider text="How to get There" />
            <DirectionBar name={name} location={location} />
          </View>
        )}

        {contact && (
          <View>
            <PageDivider text="Details" />
            <DetailsBar contact={contact} />
          </View>
        )}

        {category === EATERY && (
          <View
            style={{
              marginBottom: 5,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              paddingHorizontal: 20,
            }}
          >
            {opentable && (
              // <FlexBtn color="#DA3743" onPress={() => WebBrowser.openBrowserAsync(opentable)}>
              //   <Text style={{ color: '#fff', fontSize: 18, marginVertical: 3 }}>
              //     Reserve Table
              //   </Text>
              // </FlexBtn>
              <FlexBtn
                color="#fff"
                onPress={() => WebBrowser.openBrowserAsync(opentable)}
                style={{
                  // shadowColor: '#2d3436',
                  shadowOffset: { width: 1, height: 2 },
                  // shadowOpacity: 0.6,
                  shadowRadius: 2,
                  borderColor: 'rgba(45, 52, 54, 0.2)',
                  borderStyle: 'solid',
                  borderWidth: 1,
                }}
              >
                <BtnText style={{ marginVertical: 3, paddingHorizontal: 5 }}>Reserve Table</BtnText>
              </FlexBtn>
            )}
            {menu && (
              // <FlexBtn color="#DA3743" onPress={() => WebBrowser.openBrowserAsync(menu)}>
              //   <Text style={{ color: '#fff', fontSize: 18, marginVertical: 3 }}>Explore Menu</Text>
              // </FlexBtn>
              <FlexBtn
                color="#fff"
                onPress={() => WebBrowser.openBrowserAsync(menu)}
                style={{
                  // shadowColor: '#2d3436',
                  shadowOffset: { width: 1, height: 2 },
                  // shadowOpacity: 0.6,
                  shadowRadius: 2,
                  borderColor: 'rgba(45, 52, 54, 0.2)',
                  borderStyle: 'solid',
                  borderWidth: 1,
                }}
              >
                <BtnText style={{ marginVertical: 3, paddingHorizontal: 5 }}>Explore Menu</BtnText>
              </FlexBtn>
            )}
          </View>
        )}

        {social && (
          <View>
            <PageDivider text="Social" />
            <SocialBar social={social} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default LocaleScreen;
