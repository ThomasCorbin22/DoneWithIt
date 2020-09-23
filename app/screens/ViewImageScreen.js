import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from '../config/colors'

export default function WelcomeScreen() {
    return (
        <View
            style={styles.container}
        >
            <View style={[styles.black, styles.nav]}>
                <View style={[styles.red, styles.box]} />
                <View style={[styles.green, styles.box]} />
            </View>
            <Image
                source={require("../assets/chair.jpg")}
                style={styles.chair}
                resizeMode={'contain'}
            />
            <View style={styles.black} />
        </View>
    );
}

const styles = StyleSheet.create({
    red: {
        backgroundColor: colors.primary,
        left: 30
    },
    green: {
        backgroundColor: colors.secondary,
        right: 30
    },
    box: {
        height: 40,
        width: 40,
        position: 'absolute',
        top: 0,

    },
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    chair: {
        height: '100%',
        width: '100%',
    }
});
