import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={{flex: 1}}></MapView>
        </View>
    );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    
    },
});

export default MapScreen;