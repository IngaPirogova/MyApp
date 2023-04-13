import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback, Button,
} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { auth } from '../../firebase/config';
import { authSignOutUser } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";


const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const signOut = () => {
    dispatch(authSignOutUser());
  };


  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>

        <ImageBackground
          style={styles.imgBg}
          source={require('../../../myApp/assets/images/bg.jpg')} >

          <KeyboardAvoidingView
            style={styles.wrapper}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >

            <View style={{ ...styles.registrationWrapper, marginBottom: isShowKeyboard ? -140 : 0, paddingBottom: isShowKeyboard ? 100 : 45 }}>

              <View style={{
                ...styles.userFoto,
                transform: [{ translateX: -57 }], bottom: isShowKeyboard ? 256 : 400
              }}>
              </View>

              <TouchableOpacity
                style={[
                  styles.addPhotoBtn,
                  {
                    transform: [{ translateX: 48 }],
                  },
                ]}
                activeOpacity={0.8}
              >
                <AntDesign name="pluscircleo" size={25} color="#ff6c00" />
              </TouchableOpacity>

              <TouchableOpacity
                title="signOut"
                activeOpacity={0.8}
                onPress={signOut}
                style={[
                  { position: "absolute", left: "50%", top: "50%" },
                  { transform: [{ translateX: 125 }, { translateY: 21 }] },
                ]}
              >
                <Feather
                  name="log-out"
                  size={24}
                  color="#BDBDBD"
                />
              </TouchableOpacity>
              {/* <Button title="signOut" onPress={signOut}/>         */}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imgBg: {
    flex: 1,
    resizeMode: "cover",
  },

  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },

  registrationWrapper: {
    position: "relative",
    paddingTop: 350,
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },

  userFoto: {
    position: "absolute",
    top: -60,
    left: "50%",
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },

  addPhotoBtn: {
    position: "absolute",
    top: 20,
    left: "50%",
  },
});

export default ProfileScreen;