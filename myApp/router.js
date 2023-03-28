import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegistrationScreen from './Screens/Auth/RegistrationScreen';
import LoginScreen from './Screens/Auth/LoginScreen';
import Home from './Screens/MainScreen/Home';

const AuthStack = createNativeStackNavigator();

// export const useRoute = (isAuth) => {
//     if(!isAuth){
//       return  (
//        <AuthStack.Navigator>
//          <AuthStack.Screen name='Registration' component={RegistrationScreen} options={{ headerShown: false }}/>
//          <AuthStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/> 
//        </AuthStack.Navigator> 
//       );      
//     }

//     return (
//         <Home />
//       );
//      };

export const useRoute = () => {
  return  (
    <AuthStack.Navigator>
          <AuthStack.Screen name='Registration' component={RegistrationScreen} options={{ headerShown: false }}/>
          <AuthStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/> 
          <AuthStack.Screen name='Home' component={Home} />
       </AuthStack.Navigator> 
  )
}