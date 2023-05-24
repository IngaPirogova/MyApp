import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { authSignUpUser } from '../../redux/auth/authOperations';


const initialState = {
  nickName: "",
  userEmail: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {

 console.log('navigation', navigation);
 console.log(Platform.OS);

 const [isShowKeyboard, setIsShowKeyboard] = useState(false);
 const [state, setState] = useState(initialState);
 const [isShowPassword, setIsShowPassword] = useState(false);

 const dispatch = useDispatch();
 

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };


  const handleSubmit = () => {
    keyboardHide();
    dispatch(authSignUpUser(state));    
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

              <View>
                <Text style={{ ...styles.ragisterTitle, fontFamily: 'Roboto-Medium', fontSize: 30 }}>Регистрация</Text>
              </View>

              <View>
                <TextInput style={{
                  ...styles.registerInput,
                  backgroundColor: state.nickName ? "#fff" : "#f6f6f6",
                  borderColor: state.nickName ? "#ff6c00" : "#e8e8e8",
                }}
                  placeholder="Логин"
                  placeholderTextColor="#bdbdbd"
                  value={state.nickName}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) => {
                    setState((prevState) => ({ ...prevState, nickName: value }));
                  }}
                />
              </View>

              <View style={{ marginTop: 16 }}>
                <TextInput style={{
                  ...styles.registerInput,
                  backgroundColor: state.userEmail ? "#fff" : "#f6f6f6",
                  borderColor: state.userEmail ? "#ff6c00" : "#e8e8e8",
                }}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor="#bdbdbd"
                  value={state.userEmail}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) => {
                    setState((prevState) => ({ ...prevState, userEmail: value }));
                  }}
                />
              </View>

              <View style={{ marginTop: 16 }}>
                <TextInput style={{
                  ...styles.registerInput,
                  backgroundColor: state.password ? "#fff" : "#f6f6f6",
                  borderColor: state.password ? "#ff6c00" : "#e8e8e8",
                }}
                  placeholder={"Пароль"}
                  placeholderTextColor="#bdbdbd"
                  secureTextEntry={!isShowPassword}
                  value={state.password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) => {
                    setState((prevState) => ({ ...prevState, password: value }));
                  }}
                />
                <Text style={{ ...styles.showPasswordText, transform: [{ translateY: -10 }], fontFamily: 'Roboto-Regular', fontSize: 16 }}>
                  {!isShowPassword ? "Показать" : "Скрыть"}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{...styles.registerBtn, marginTop: isShowKeyboard ? 40 : 40 }}
              //   onPress={() => navigation.navigate('Home', {
              //     screen: 'PostScreen',
              // })}
              onPress={handleSubmit}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.registerTextBottom} >Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  imgBg: {
    flex: 1,
    // position: "relative",
    resizeMode: "cover",
    // width: "100%",
    // height:"100%",
    // justifyContent: "flex-end",   

  },

  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },

  // registrationForm: {      
  //   width: "100%",
  //   //  height: "72%",
  //    //marginTop: "auto",
  //   borderTopLeftRadius: 25,
  //   borderTopRightRadius: 25,
  //   backgroundColor: "#fff",   


  // },
  registrationWrapper: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },

  userFoto: {
    // position: "absolute",
    // bottom: 400,
    // left: "50%",
    // width: 120,
    // height: 120,
    // backgroundColor: "#f6f6f6",
    // borderRadius: 16,
    // zIndex: 2,
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

  ragisterTitle: {
    fontFamily: "Roboto-Medium",
    marginBottom: 32,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },

  registerInput: {
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 16,
    marginHorizontal: 16,
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
  },

  registerBtn: {
    height: 50,
    borderRadius: 100,
    marginTop: 40,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#f0f8ff",
      },
      android: {
        backgroundColor: "#FF6C00",
        borderColor: "transparent",
      }
    })
  },

  btnTitle: {
    color: '#FFFFFF',
  },

  registerTextBottom: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },

  showPasswordText: {
    position: "absolute",
    fontFamily: "Roboto-Regular",
    marginRight: 16,
    right: 16,
    top: "50%",
    fontSize: 16,
    lineHeight: 19,
    color: "#1b4371",
  },
});