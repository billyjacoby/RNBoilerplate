import React, {useState, useEffect} from 'react';
import {
  Button,
  View,
  StatusBar,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = props => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState();

  const fetchData = () => {
    return fetch('https://backend.billyjacoby.com/wp-json/wp/v2/posts/?_embed')
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  };

  const clickFetchData = () => {
    setIsLoading(true);
    fetchData()
      .then(data => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    props.navigation.setParams({increaseCount: () => setCount(count + 1)});
  }, [count]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StatusBar barStyle="light-content" />
        <Text>Home Screen</Text>
        <Text>You've clicked the button {count} times.</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here...',
            })
          }
        />
        <Button
          title={isLoading ? 'Loading...' : 'Fetch Data'}
          onPress={() => clickFetchData()}
        />
      </View>
      <View style={{flex: 1.5}}>
        {posts && (
          <ScrollView style={{backgroundColor: '#dff'}}>
            {posts.map(post => (
              <View
                key={post.id}
                style={{alignContent: 'center', marginVertical: 15}}>
                <Text style={{fontSize: 15}}>{post.title.rendered}</Text>
                <View
                  style={{
                    backgroundColor: '#000',
                    margin: 5,
                    marginHorizontal: 100,
                    borderRadius: 10,
                  }}>
                  <Button
                    title="View Post"
                    onPress={() =>
                      props.navigation.navigate('Details', {
                        post,
                      })
                    }
                  />
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};
// This is how to set the 'Static' nav options variable on a component
HomeScreen.navigationOptions = ({navigation}) => ({
  title: 'Home',
  headerRight: () => (
    <TouchableOpacity
      style={{marginRight: 15}}
      onPress={() => navigation.openDrawer()}>
      <Icon name="ios-menu" size={35} color="white" />
    </TouchableOpacity>
  ),
  headerLeft: () => (
    <Button
      onPress={navigation.getParam('increaseCount')}
      title="Click Me!"
      color="#fff"
    />
  ),
  headerStyle: {
    // this is technically a 'View' so any view options can be set here...
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    // this is technically a 'Text' so any Text options can be set here...
    fontWeight: '100',
    fontSize: 30,
    marginBottom: 15,
  },
});

export default HomeScreen;
