import React, {useState} from 'react';
import {Button, Text, View, ScrollView, StatusBar, Image} from 'react-native';
import HTML from 'react-native-render-html';

const DetailScreen = props => {
  const [isImageLoading, setIsImageLoading] = useState(false);

  if (props.navigation.state.params.post) {
    const post = props.navigation.state.params.post;
    return (
      <ScrollView>
        <Image
          source={{uri: post._embedded['wp:featuredmedia'][0]['link']}}
          style={{
            alignSelf: 'center',
            width:
              post._embedded['wp:featuredmedia'][0].media_details.sizes.large
                .width,
            height:
              post._embedded['wp:featuredmedia'][0].media_details.sizes.large
                .height,
          }}
          onLoadStart={() => setIsImageLoading(true)}
          onLoad={() => setIsImageLoading(false)}
          // resizeMode="cover"
        />
        <HTML html={post.content.rendered} />
        <Text>{JSON.stringify(post.content.rendered)}</Text>
      </ScrollView>
    );
  } else {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar barStyle="dark-content" />
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(props.navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam: {JSON.stringify(props.navigation.state.otherParam)}
        </Text>
        <Button
          title="Update the title"
          onPress={() =>
            props.navigation.setParams({otherParam: 'Updated Title'})
          }
        />
        <Button
          title="Go to Details... again"
          onPress={() => props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => props.navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
      </View>
    );
  }
};
DetailScreen.navigationOptions = ({navigation, navigationOptions}) => {
  const {params} = navigation.state;

  return {
    title: params ? params.otherParam : 'A nested Details screen',
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor,
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor,
  };
};

export default DetailScreen;
