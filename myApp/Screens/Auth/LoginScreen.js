import React, { useState } from 'react';
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
import { authSignInUser } from '../../redux/auth/authOperations';


const initialState = {

    email: "",
    password: "",
};

export default function LoginScreen({ navigation }) {
    console.log('navigation', navigation);
    console.log(Platform.OS);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const dispatch = useDispatch();
    

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        setState(initialState);
    };

    const handleSubmit = () => {
        keyboardHide();
        dispatch(authSignInUser(state));
    };
      
    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container} >

                <ImageBackground
                    style={styles.imgBg}
                    source={require('../../../myApp/assets/images/bg.jpg')} >
                    

                    <KeyboardAvoidingView
                        style={styles.wrapper}
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                    >

                        <View style={{ ...styles.loginWrapper, marginBottom: isShowKeyboard ? -240 : 0 }}>

                            <View>
                                <Text style={{ ...styles.loginTitle, fontFamily: 'Roboto-Medium', fontSize: 30 }}>Войти</Text>
                            </View>


                            <View style={{ marginTop: 16 }}>
                                <TextInput style={{
                                    ...styles.loginInput,
                                    backgroundColor: state.email ? "#fff" : "#f6f6f6",
                                    borderColor: state.email ? "#ff6c00" : "#e8e8e8",
                                }}
                                    placeholder={"Адрес электронной почты"}
                                    placeholderTextColor="#bdbdbd"
                                    onFocus={() => setIsShowKeyboard(true)}
                                    onChangeText={(value) => {
                                        setState((prevState) => ({ ...prevState, email: value }));
                                    }}
                                    value={state.email}
                                />
                            </View>

                            <View style={{ marginTop: 16 }}>
                                <TextInput style={{
                                    ...styles.loginInput,
                                    backgroundColor: state.password ? "#fff" : "#f6f6f6",
                                    borderColor: state.password ? "#ff6c00" : "#e8e8e8",
                                }}
                                    placeholder={"Пароль"}
                                    placeholderTextColor="#bdbdbd"
                                    secureTextEntry={!isShowPassword}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    onChangeText={(value) => {
                                        setState((prevState) => ({ ...prevState, password: value }));
                                    }}
                                    value={state.password}
                                />
                                <Text style={{ ...styles.showPasswordText, transform: [{ translateY: -10 }], fontFamily: 'Roboto-Regular', fontSize: 16 }}>
                                    {!isShowPassword ? "Показать" : "Скрыть"}
                                </Text>

                            </View>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{...styles.loginBtn, marginBottom: isShowKeyboard ? 50 : 40}}
                                // onPress={() => navigation.navigate('Home', {
                                //     screen: 'PostScreen',
                                // })}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.btnTitle}>Войти</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                                <Text style={styles.registerTextBottom} >Нет аккаунта? Зарегистрироваться</Text>
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
        resizeMode: "cover",

    },

    wrapper: {
        flex: 1,
        justifyContent: "flex-end",
    },


    loginWrapper: {
        paddingTop: 32,
        paddingBottom: 144,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#fff",
    },

    loginTitle: {
        fontFamily: "Roboto-Medium",
        marginBottom: 33,
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
        color: "#212121",
    },

    loginInput: {
        fontFamily: "Roboto-Regular",
        paddingHorizontal: 16,
        fontSize: 16,
        lineHeight: 19,
        borderWidth: 1,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        marginHorizontal: 16,
        color: "#212121",
    },

    loginBtn: {
        height: 50,
        borderRadius: 100,
        marginTop: 43,
        marginBottom: 16,
        marginHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#ff6c00",
    },

    btnTitle: {
        color: '#FFFFFF',
        fontSize: 16,
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