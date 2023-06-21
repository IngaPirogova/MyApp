import React, { useEffect, useState } from "react";
import {
  View, StyleSheet, FlatList, Image, TouchableOpacity, Text
} from "react-native"
import { Octicons, FontAwesome5 } from "@expo/vector-icons";
import { db } from '../../firebase/config';
import { collection, getDocs, onSnapshot } from 'firebase/firestore'; 

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const [commentsQuantity, setCommentsQuantity] = useState({});

  
  useEffect(() => {
    onSnapshot(collection(db, "posts"), (data) => {
      const posts = data?.docs.map((doc) => {
        const docData = doc.data() ;
        const docId = doc.id;
      
        return { ...docData, postId: docId };
        
      });

      setPosts(posts);
    });
    
  }, []);
    
   return (

    

    <View style={styles.container}>

      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <>
            <View>

              <View style={styles.photoWrapper}>
                <Image
                  source={{ uri: item.photo }}
                  style={styles.photo}
                />
              </View>

              <Text style={styles.name}>Название:{item.name}</Text>

              <View style={styles.wrapperDescr}>
                <TouchableOpacity
                  style={styles.inputWrapper}      
                   //onPress={() => navigation.navigate('Comments', { comments: item.comments })}
                  onPress={() => navigation.navigate('Comments', { postId: item.id })}
                  
                  activeOpacity={0.8}
                >
                  <FontAwesome5 style={styles.icon} name="comment" size={24} color="#BDBDBD" />
                  <Text>{commentsQuantity[item.comments] ?? 0}</Text>
                </TouchableOpacity>           

                <TouchableOpacity  
              style={styles.inputWrapper}              
                onPress={() => navigation.navigate('Map', { location: item.location })}
                activeOpacity={0.8}
              >
                <Octicons style={styles.icon} name="location" color="#BDBDBD" size={24} />
                <Text>location: {item.location?.coords || 'N/A'}</Text>
              </TouchableOpacity>
            </View>
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

  icon: {
    marginRight: 6,
  },

  name: {
    marginBottom: 8,
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

  wrapperDescr: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

 inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
  },  
});

export default PostsScreen;