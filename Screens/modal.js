import React from 'react';
import {Button, View, Text} from 'react-native';

const ModalScreen = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>This is a modal!</Text>
      <Button onPress={() => props.navigation.goBack()} title="Dismiss" />
      {/* <Button onPress={() => props.navigation.popToTop()} title="Dismiss" /> */}
    </View>
  );
};

export default ModalScreen;
