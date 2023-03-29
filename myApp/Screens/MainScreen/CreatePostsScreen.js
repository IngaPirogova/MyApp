import { Octicons, Feather, MaterialIcons } from "@expo/vector-icons";
// import { Camera } from "expo-camera";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard  } from "react-native"

const CreatePostsScreen = () => {
    
return (
 
<View style={{ flex: 1, backgroundColor: "#ffffff" }}>


  <View style={styles.container}>      
    <View style={styles.camera}>
     
      <TouchableOpacity style={styles.cameraIconContainer}>
      <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
     </TouchableOpacity>
    </View> 
    <Text style={styles.text}>Загрузите фото</Text>   

<View style={{marginTop: 22}}>
    <View >
     <TextInput
     style={styles.input}
     placeholder="Название..."
     placeholderTextColor="#BDBDBD"
     />
     </View>

     <View>
     <TextInput
     style={{...styles.input, paddingLeft: 28}}
     placeholder="Местность..."
     placeholderTextColor="#BDBDBD"
     
     />
      <Octicons name="location" color="#BDBDBD"size={22} style={{ position: "absolute", transform: [{ translateY: 11 }], }} />
     </View>
  </View>

     <TouchableOpacity
        style={styles.button} 
        activeOpacity={0.8}              
        >
        <Text style={styles.btnTitle}>Опубликовать</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.btnDel} 
        activeOpacity={0.8}>
          <Feather
            style={[
               { position: "absolute", left: "50%", top: "50%" },
               { transform: [{ translateX: -12 }, { translateY: -12 }] },
             ]}
             name="trash-2"
             size={23}
             color="#BDBDBD"
           />
        </TouchableOpacity>                   
  

  </View>
       

 </View>

      
);
};



const styles = StyleSheet.create({
//  container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     },

    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 16,
      paddingTop: 20,
      paddingBottom: 32,
    },

    camera: {
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

    cameraIconContainer: {    
      width: 60,
      height: 60,
      backgroundColor: "#FFF",
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
  },

  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },

  button: {
    height: 50,
    borderRadius: 100,
    marginTop: 25,
    // marginHorizontal: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#F6F6F6",
  },
  btnTitle: {
    color: '#BDBDBD',
    fontSize: 16,
},

  btnDel: {
    alignSelf: "center",
    marginTop: 20,
    position: "relative",
    width: 65,
    height: 35,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    marginBottom: 15,

  },
      
});

export default CreatePostsScreen;


