import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import DrawerNavigator from '../Navigation/DrawerNavigator/drawer-navigator';
import ModalScreen from '../Screens/modal';

const RootStack = createStackNavigator(
  {
    Main: {
      screen: DrawerNavigator,
      // navigationOptions: ({navigation}) => ({
      //   headerRight: () => (
      //     <TouchableOpacity
      //       style={{marginRight: 15}}
      //       onPress={() => navigation.openDrawer()}>
      //       <Icon name="ios-menu" size={35} color="white" />
      //     </TouchableOpacity>
      //   ),
      //   headerLeft: () => (
      //     <Button
      //       onPress={navigation.getParam('increaseCount')}
      //       title="Click Me!"
      //       color="#fff"
      //     />
      //   ),
      //   headerStyle: {
      //     // this is technically a 'View' so any view options can be set here...
      //     backgroundColor: '#f4511e',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     // this is technically a 'Text' so any Text options can be set here...
      //     fontWeight: '100',
      //     fontSize: 30,
      //     marginBottom: 15,
      //   },
      // }),
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  {
    // mode: 'modal',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
