// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback, SafeAreaView, Image, Button, Alert, Platform, StatusBar } from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
    return (
        <View style={{
            backgroundColor: '#fff',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                backgroundColor: "dodgerblue",
                flexShrink: 1,
                width: 400,
                height: 100,
            }} />
            <View style={{
                backgroundColor: "gold",
                width: 100,
                height: 100,
                top: 20,
                left: 20,
                position: 'absolute'
            }} />
            <View style={{
                backgroundColor: "tomato",
                width: 100,
                height: 100
            }} />
            <View style={{
                backgroundColor: "grey",
                width: 100,
                height: 100
            }} />
            <View style={{
                backgroundColor: "greenyellow",
                width: 100,
                height: 100
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        // justifyContent: "center",
    },
});
