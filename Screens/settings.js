import React from 'react';
import {View, Text, Button} from 'react-native';

const SettingsScreen = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>
        {props.navigation.state.routeName
          ? props.navigation.state.routeName
          : 'Settings'}{' '}
        Screen
      </Text>
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default SettingsScreen;
