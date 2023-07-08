//https://expo.dev/accounts/ingapie/projects/myApp/updates/37e86786-7a28-4b87-b42d-f8a684ae5596

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useCallback } from 'react';
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Main from './components/Main';

SplashScreen.preventAutoHideAsync();

export default function App() {  
 
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
   <Provider store={store} >
   <View style={styles.container} onLayout={onLayoutRootView}>   
      <Main />    
    </View>          
    </Provider>
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

