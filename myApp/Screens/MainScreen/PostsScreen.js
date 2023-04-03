import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, Text } from "react-native"
import { Octicons, FontAwesome5 } from "@expo/vector-icons";


const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log('route.params', route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log('posts', posts);

  return (

    <View style={styles.container}>

      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <>
            <View style={styles.photoWrapper}>
              <Image
                source={{ uri: item.photo }}
                style={styles.photo}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                value={item.name}

              />
            </View>
            <View>
              <TextInput
                style={{ ...styles.input }}

                placeholderTextColor="#BDBDBD"
                onChangeText={(value) => { setLocation(value) }}
                value={item.location}
              />

              <TouchableOpacity
                style={{ position: "absolute", transform: [{ translateY: 11 }], }}
                onPress={() => navigation.navigate('Map', { location: item.location })}>
                <Octicons name="location" color="#BDBDBD" size={24} />
              </TouchableOpacity>
            </View>

            <View>
              <TextInput
                style={{ ...styles.input }}

                placeholderTextColor="#BDBDBD"
                onChangeText={(value) => { setLocation(value) }}
                value={item.location}
              />

              <TouchableOpacity
                style={{ position: "absolute", transform: [{ translateY: 11 }], }}
                onPress={() => navigation.navigate('Comments', { comments: item.comments })}>
                <FontAwesome5 name="comment" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
          </>
        )}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 20,
    paddingBottom: 32,
    // alignItems: 'center',
  },

  photoWrapper: {
    height: 200,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  photo: {
    position: 'absolute',
    height: 200,
    width: "100%",
    borderRadius: 8,
  },

  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 15,
  },
});

export default PostsScreen;