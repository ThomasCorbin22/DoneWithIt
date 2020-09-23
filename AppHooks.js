// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback, SafeAreaView, Image, Button, Alert, Platform, StatusBar } from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
    console.log(useDimensions())
    console.log(useDeviceOrientation())

    const { landscape } = useDeviceOrientation()

    return (
        <SafeAreaView style={{
            backgroundColor: "dodgerblue",
            width: "100%",
            height: landscape ? '100%' : '30%'
        }}>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
});
