import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack/home-stack';
import SettingsScreen from '../../../Screens/settings';

import IconWithBadge from '../../../Components/icon-with-badge';

const NotifcationsIconWithBadge = props => (
  <IconWithBadge {...props} badgeCount={3} />
);

const TabNavigator = createBottomTabNavigator(
  {
    Main: HomeStack,
    Notifications: SettingsScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Main') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Notifications') {
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
          IconComponent = NotifcationsIconWithBadge;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
  },
);

export default TabNavigator;
