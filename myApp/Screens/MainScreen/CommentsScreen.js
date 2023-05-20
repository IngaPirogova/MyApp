
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,

} from "react-native";
import { useSelector } from "react-redux";
import db from "../../firebase/config";
import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = () => {
//   const { postId } = route.params;
  const [comment, setComment] = useState("");
  const { nickName } = useSelector((state) => state.auth);
//   const createPost = async () => {
//     db.firestore()
//       .collection("posts")
//       .doc(postId)
//       .collection("comments")
//       .add({ comment, nickName });
//   };

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
      <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Комментировать..."
            placeholderTextColor="#BDBDBD"
            // value={comment}
            // onChangeText={(value) => setComment(value)}
          />          
    
    <TouchableOpacity
            // onPress={submitHandler}
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