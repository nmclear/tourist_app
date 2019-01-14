import React from 'react';
import { View, Linking } from 'react-native';
import { WebBrowser, MailComposer } from 'expo';
import { formatTodaysHours, formatPhoneNumber, formatUrlDisplay } from '../../../helpers';

import IconTextRow from '../../IconTextRow';

const DetailsBar = ({ contact }) => {
  const {
    phone, email, website, weekdayHours,
  } = contact;

  return (
    <View style={{ marginBottom: 5 }}>
      {phone && (
        <IconTextRow
          iconName="phone"
          iconType="simple-line-icon"
          text={formatPhoneNumber(phone)}
          onPress={() => Linking.openURL(`tel:+1${phone}`)}
        />
      )}
      {weekdayHours && (
        <IconTextRow
          iconName="clock"
          iconType="simple-line-icon"
          text={formatTodaysHours(weekdayHours)}
        />
      )}
      {website && (
        <IconTextRow
          iconName="screen-smartphone"
          iconType="simple-line-icon"
          text={formatUrlDisplay(website)}
          onPress={() => WebBrowser.openBrowserAsync(website)}
        />
      )}
      {email && (
        <IconTextRow
          iconName="envelope"
          iconType="simple-line-icon"
          text={email}
          onPress={() => MailComposer.composeAsync({ recipients: [email] })}
        />
      )}
    </View>
  );
};

export default DetailsBar;
