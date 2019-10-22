import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'purple',
    borderRadius: 10,
  },
});

const HelloWorldApp = () => {
  const getBackendPosts = () => {
    return fetch('https://backend.billyjacoby.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  };

  const _onButtonPress = () => {
    backendPosts ? alert('Posts have loaded!') : alert('No posts loaded...');
  };

  const _onLinkPress = post => {
    // console.log(post.content.rendered);
    alert(post.content.rendered);
  };

  const [backendPosts, setBackendPosts] = useState(false);

  useEffect(() => {
    getBackendPosts().then(data => {
      setBackendPosts(data);
    });
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
            }}>
            <Text style={styles.bigBlue}>Hello, world!</Text>
            <Text style={styles.red}>Goodbye world!!</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'steelblue',
              justifyContent: 'center',
            }}>
            <View style={styles.buttonContainer}>
              <Button
                color="white"
                title="This is the button title!"
                onPress={_onButtonPress}
              />
            </View>
          </View>
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'powderblue',
          }}>
          {backendPosts ? (
            backendPosts.map(post => {
              return (
                <View key={post.id} style={{padding: 10}}>
                  <Text>ID: {post.id}</Text>
                  <Text>{post.title.rendered}</Text>
                  <View
                    style={[
                      styles.buttonContainer,
                      {
                        paddingVertical: 5,
                        paddingHorizontal: 15,
                        alignSelf: 'center',
                      },
                    ]}>
                    <Button
                      color="white"
                      title="View Content"
                      onPress={() => _onLinkPress(post)}
                    />
                  </View>
                </View>
              );
            })
          ) : (
            <Text>Loading...</Text>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default HelloWorldApp;
