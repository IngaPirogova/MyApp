import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import {db} from "../../firebase/config";
import { AntDesign } from "@expo/vector-icons";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"; 


const CommentsScreen = ({route}) => {
const { postId } = route.params;
const { nickName } = useSelector((state) => state.auth);
const [newComment, setNewComment] = useState("");
const [allComments, setAllComments] = useState([]);


const fetchCommentsByPostId = async (postId) => {
  try {
    const commentsCollection = collection(db, `posts/${postId}/comments`);
    const querySnapshot = await getDocs(commentsCollection);
    const commentsData = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        postId: data.postId, // Используйте значение postId из базы данных
        comments: data.comments,
        nickName: data.nickName,
      };
    });
    console.log("Получены комментарии:", commentsData);
    setAllComments(commentsData);
  } catch (error) {
    console.log("Ошибка при получении комментариев:", error.message);
  }
};

useEffect(() => {
  fetchCommentsByPostId(postId);
}, [postId]);

const uploadComments = async () => {
  try {
    const commentsCollection = collection(db, `posts/${postId}/comments`);
    const commentData = { comments: newComment, nickName, postId };
    const commentRef = await addDoc(commentsCollection, commentData);
    await updateDoc(doc(commentsCollection, commentRef.id), commentData);
    fetchCommentsByPostId(postId); // Обновление списка комментариев после добавления
    setNewComment(""); // Сброс введенного комментария
  } catch (error) {
    console.log("Ошибка при добавлении комментария:", error.message);
  }
};


  return (
    <TouchableWithoutFeedback 
    // onPress={() => Keyboard.dismiss()}
    >
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        >

    <View style={styles.wrapper}>

    <SafeAreaView >
        <FlatList
           data={allComments}
          renderItem={({ item }) => (
            <View>
              <Text>{item.comments}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>

      <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Комментировать..."
            placeholderTextColor="#BDBDBD"
             value={newComment}
             onChangeText={(value) => setNewComment(value)}
          />          
    
    <TouchableOpacity
            onPress={uploadComments}
            activeOpacity={0.8}
            style={styles.iconWrapper}

          >
            <AntDesign
              style={[
                styles.icon,
                { transform: [{ translateX: -12 }, { translateY: -12 }] },
              ]}
              name="arrowup"
              size={24}
              color="#fff"
            />
          </TouchableOpacity>
          </View>
    </View>
    </KeyboardAvoidingView>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",

  },

  inputWrapper: {
    position: "relative",
    height: 50,
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
  },
  input: {
    height: 50,
    borderRadius: 100,
    padding: 16,
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
  },
  iconWrapper: {
    position: "absolute",
    top: 24,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    backgroundColor: "#FF6C00",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  
});

export default CommentsScreen;
















//  import { View, Text, StyleSheet } from "react-native"

// const CommentsScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text>CommentsScreen</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//  container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     },
// });

// export default CommentsScreen;