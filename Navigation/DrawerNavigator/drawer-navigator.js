import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator/tab-navigator';
import SettingsScreen from '../../Screens/settings';

const DrawerNavigator = createDrawerNavigator(
  {
    Tab: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: () => <Icon name="ios-home" size={25} />,
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        drawerLabel: 'Settings',
        drawerIcon: () => <Icon name="ios-settings" size={25} />,
      },
    },
  },
  {
    drawerPosition: 'right',
    drawerType: 'slide',
  },
);

export default DrawerNavigator;
