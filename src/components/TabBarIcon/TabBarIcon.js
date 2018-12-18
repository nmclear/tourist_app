import React from 'react';
import { Icon } from 'react-native-elements';

import Colors from '../../constants/Colors';

const TabBarIcon = ({ name, focused, type }) => (
  <Icon
    name={name}
    type={type || 'material'}
    size={34}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

export default TabBarIcon;
