import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const routing = useRoute({});
 
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require("..//myApp/assets/fonts/Roboto-Regular.ttf"),
    'Roboto-Medium': require("..//myApp/assets/fonts/Roboto-Medium.ttf"),
  });
 
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
     

   <View style={styles.container} onLayout={onLayoutRootView}>

     <NavigationContainer>{routing}</NavigationContainer>
    </View>          
  
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

});