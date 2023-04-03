import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        
        initialRegion={{
          latitude: 46.5858881,
          longitude: 30.7937945,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{ latitude: 46.5858881, longitude: 30.7937945 }}
          title="travel photo"
        />
      </MapView>
    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });
  
  export default MapScreen;