import { Octicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView, Keyboard
} from "react-native"

import * as Location from 'expo-location';


const CreatePostsScreen = ({ navigation }) => {

  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState(null);


  const takePhoto = async () => {

    const photo = await cameraRef.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
    setPhoto(photo.uri);
    setLocation(location.coords);
    console.log("photo", photo);
    console.log("name", name);
    console.log("location", location);
  };

  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate('Posts', { photo, name, location },);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <KeyboardAvoidingView
          style={styles.wrapper}
          behavior={Platform.OS == "ios" ? "padding" : "height"}>

          <View style={styles.container}>
            <Camera style={styles.camera} ref={setCameraRef}>
              {photo && (
                <View style={styles.takePhotoContainer}>
                  <Image source={{ uri: photo }} style={{ height: 200, width: '100%', borderRadius: 1 }} />
                </View>
              )}
              <TouchableOpacity onPress={takePhoto} style={{ ...styles.cameraIconContainer, backgroundColor: !photo ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)' }}>
                <MaterialIcons name="camera-alt" size={24} style={{ color: !photo ? '#BDBDBD' : '#FFFFFF' }} />
              </TouchableOpacity>
            </Camera>

            <Text style={styles.text}>
              {!photo ? "Загрузите фото" : "Редактировать фото"}
            </Text>

            <View style={{ marginTop: 22 }}>
              <View >
                <TextInput
                  style={styles.input}
                  placeholder="Название..."
                  placeholderTextColor="#BDBDBD"
                  onChangeText={(value) => { setName(value) }}
                  value={name}
                />
              </View>

              <View>
                <TextInput
                  style={{ ...styles.input, paddingLeft: 28 }}
                  placeholder="Местность..."
                  placeholderTextColor="#BDBDBD"
                  onChangeText={(value) => { setLocation(value) }}
                  value={location}
                />
                <TouchableOpacity
                  style={{ position: "absolute", transform: [{ translateY: 11 }], }}
                  onPress={() => navigation.navigate('Map')}>
                  <Octicons name="location" color="#BDBDBD" size={24} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: !photo ? '#f6f6f6' : '#ff6c00', }}
              activeOpacity={0.8}
              onPress={sendPhoto}
            >
              <Text style={{ ...styles.btnTitle, color: !photo ? '#BDBDBD' : '#FFFFFF', }}>Опубликовать</Text>
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
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>

  );

};



const styles = StyleSheet.create({
  //  container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     },
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },

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

  takePhotoContainer: {
    position: "absolute",
    borderColor: "#F6F6F6",
    borderWidth: 1,
    height: 200,
    width: "100%",
    borderRadius: 8,
  },

  cameraIconContainer: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 4,
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


