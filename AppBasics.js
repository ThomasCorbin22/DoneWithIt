// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback, SafeAreaView, Image, Button, Alert, Platform, StatusBar } from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
    let x = 1;
    console.log("App executed");

    const handlePress = () => console.log("Text pressed")
    console.log(Dimensions.get('screen'))

    return (
        <SafeAreaView style={[styles.container, constainerStyle]}>
            <Text numberOfLines={1} onPress={handlePress}>Hello React Native - A really really long text. Now I wanna make it longer and see what happens!</Text>
            <StatusBar style="auto" />
            <TouchableHighlight onPress={() => console.log("Image tapped")}>
                <Image
                    fadeDuration={1000}
                    // blurRadius={1}
                    source={{
                        uri: "https://picsum.photos/seed/picsum/200/300",
                        width: 200,
                        height: 300
                    }} />
            </TouchableHighlight>
            <TouchableNativeFeedback>
                <View style={{ width: 200, height: 70, backgroundColor: 'dodgerblue' }}>
                </View>
            </TouchableNativeFeedback>
            <Button color='orange' title='Alert'
                onPress={() => Alert.alert("My title", "My message", [
                    { text: 'Yes', onPress: () => console.log('Yes') },
                    { text: 'No', onPress: () => console.log('No') }])} />
            {/* Only works on IOS */}
            <Button color='red' title='Prompt'
                onPress={() => Alert.prompt("My title", "My message", text => console.log(text))} />
        </SafeAreaView>
    );
}

const constainerStyle = { backgroundColor: 'yellow' }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        // justifyContent: "center",
    },
});
