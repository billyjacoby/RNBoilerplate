import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../../../../Screens/home';
import DetailScreen from '../../../../Screens/details';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      // Below is how you would configure a component as the header title, if you wanted
      // to render and image for example. This does however override the title in your screen components...
      // headerTitle: () => <CustomHeader />,
      headerStyle: {
        // this is technically a 'View' so any view options can be set here...
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        // this is technically a 'Text' so any Text options can be set here...
        fontWeight: '100',
        fontSize: 30,
        marginBottom: 10,
      },
    },
  },
);

export default HomeStack;
