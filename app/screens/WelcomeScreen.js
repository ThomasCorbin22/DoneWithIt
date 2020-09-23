import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, StatusBar, Platform } from "react-native";

export default function WelcomeScreen() {
    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo-red.png")}
                    style={styles.logo}
                />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={[styles.red, styles.box]} />
            <View style={[styles.green, styles.box]} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    red: {
        backgroundColor: '#4ECDC4',
    },
    green: {
        backgroundColor: '#fc5c65',
    },
    box: {
        height: 70,
        width: '100%',
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: Platform.OS === "android" ? StatusBar.currentHeight + 70 : 70,
        alignItems: 'center'
    }
});
