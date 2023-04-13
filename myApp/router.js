import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './Screens/Auth/RegistrationScreen';
import LoginScreen from './Screens/Auth/LoginScreen';
import Home from './Screens/MainScreen/Home';
import MapScreen from './Screens/MainScreen/MapScreen';
import CommentsScreen from './Screens/MainScreen/CommentsScreen';

const AuthStack = createNativeStackNavigator();

export const useRoute = (isAuth) => {  
  
    if (!isAuth) {
      return  (
       <AuthStack.Navigator>
        <AuthStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/> 
         <AuthStack.Screen name='Registration' component={RegistrationScreen} options={{ headerShown: false }}/>
       </AuthStack.Navigator> 
      );      
    }
    return (
        <AuthStack.Navigator>
       <AuthStack.Screen name='Home' component={Home} options={{
        title: "Go back", headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 15,
        },
      }} 
    
      />
      <AuthStack.Screen name='Map' component={MapScreen} options={{
        title: "Карта", headerTitleAlign: "center", headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17, lineHeight: 22,
        },
      }} />
      <AuthStack.Screen name='Comments' component={CommentsScreen} options={{
        title: "Комментарии", headerTitleAlign: "center", headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17, lineHeight: 22,
        },
      }} />
        </AuthStack.Navigator> 
       );
     };


