import React from 'react';
import {Button, View, Text, StatusBar} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import DrawerNavigator from '../Navigation/DrawerNavigator/drawer-navigator';
import ModalScreen from '../Screens/modal';

const RootStack = createStackNavigator(
  {
    Main: {
      screen: DrawerNavigator,
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;

// const HomeScreen = props => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     props.navigation.setParams({increaseCount: () => setCount(count + 1)});
//   }, [count]);

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <StatusBar barStyle="light-content" />
//       <Text>Home Screen</Text>
//       <Text>{count}</Text>
//       <Button
//         title="Go to Details"
//         // Huge PITA to alter state in the header with hooks...
//         onPress={() =>
//           props.navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here...',
//           })
//         }
//       />
//       <Button
//         title="Go to settings..."
//         onPress={() => props.navigation.navigate('Settings')}
//       />
//     </View>
//   );
// };
// // This is how to set the 'Static' nav options variable on a component
// HomeScreen.navigationOptions = ({navigation}) => ({
//   title: 'Home',
//   headerRight: () => (
//     <Button
//       onPress={navigation.getParam('increaseCount')}
//       title="+1"
//       color="#fff"
//     />
//   ),
//   headerLeft: () => (
//     <Button
//       onPress={() => navigation.navigate('Modal')}
//       title="Info"
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
// });

// const ModalScreen = props => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontSize: 40}}>Modallllll</Text>
//       <Button onPress={() => props.navigation.goBack()} title="Dismiss" />
//       {/* <Button onPress={() => props.navigation.popToTop()} title="Dismiss" /> */}
//     </View>
//   );
// };

// const SettingsScreen = props => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontSize: 40}}>Settings Screen</Text>
//     </View>
//   );
// };

// const DetailScreen = props => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <StatusBar barStyle="dark-content" />
//       <Text>Details Screen</Text>
//       <Text>
//         itemId: {JSON.stringify(props.navigation.getParam('itemId', 'NO-ID'))}
//       </Text>
//       <Text>
//         otherParam:{' '}
//         {JSON.stringify(
//           props.navigation.getParam('otherParam', 'default value'),
//         )}
//       </Text>
//       <Button
//         title="Update the title"
//         onPress={() =>
//           props.navigation.setParams({otherParam: 'Updated Title'})
//         }
//       />
//       <Button
//         title="Go to Details... again"
//         onPress={() => props.navigation.push('Details')}
//       />
//       <Button
//         title="Go to Home"
//         onPress={() => props.navigation.navigate('Home')}
//       />
//       <Button title="Go back" onPress={() => props.navigation.goBack()} />
//     </View>
//   );
// };
// DetailScreen.navigationOptions = ({navigation, navigationOptions}) => {
//   const {params} = navigation.state;

//   return {
//     title: params ? params.otherParam : 'A nested Details screen',
//     headerStyle: {
//       backgroundColor: navigationOptions.headerTintColor,
//     },
//     headerTintColor: navigationOptions.headerStyle.backgroundColor,
//   };
// };

const CustomHeader = props => (
  <View>
    <Text>Custom Header!</Text>
  </View>
);

// const HomeStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       // Below is how you would configure a component as the header title, if you wanted
//       // to render and image for example. This does however override the title in your screen components...
//       // headerTitle: () => <CustomHeader />,
//       headerStyle: {
//         // this is technically a 'View' so any view options can be set here...
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         // this is technically a 'Text' so any Text options can be set here...
//         fontWeight: '100',
//         fontSize: 30,
//         marginBottom: 10,
//       },
//     },
//   },
// );

// const IconWithBadge = props => {
//   const {name, badgeCount, color, size} = props;
//   return (
//     <View style={{width: 24, height: 24, margin: 5}}>
//       <Ionicons name={name} size={size} color={color} />
//       {badgeCount > 0 && (
//         <View
//           style={{
//             position: 'absolute',
//             right: -6,
//             top: -3,
//             backgroundColor: 'red',
//             borderRadius: 6,
//             width: 12,
//             height: 12,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
//             {badgeCount}
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const HomeIconWithBadge = props => <IconWithBadge {...props} badgeCount={3} />;

// const TabNavigator = createBottomTabNavigator(
//   {
//     Left: HomeStack,
//     Settings: SettingsScreen,
//   },
//   {
//     defaultNavigationOptions: ({navigation}) => ({
//       tabBarIcon: ({focused, horizontal, tintColor}) => {
//         const {routeName} = navigation.state;
//         let IconComponent = Ionicons;
//         let iconName;
//         if (routeName === 'Main') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//           IconComponent = HomeIconWithBadge;
//         } else if (routeName === 'Settings') {
//           iconName = 'ios-options';
//         }

//         return <IconComponent name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//   },
// );

// const DrawerNavigator = createDrawerNavigator(
//   {
//     Tab: TabNavigator,
//     Notifications: {
//       screen: ModalScreen,
//     },
//   },
//   {
//     drawerPosition: 'right',
//     drawerType: 'slide',
//   },
// );
