import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import AppLoading from "expo-app-loading";
import AppNavigator from "./navigation/AppNavigator";
import ElectionScreen from "./screens/ElectionScreen/ElectionScreen/ElectionScreen";
import MainScreen from "./screens/MainScreen/MainScreen/MainScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function App() {
    const [loaded] = useFonts({
        OpenSans: require("./assets/fonts/OpenSans/OpenSans-Regular.ttf"),
        OpenSansBold: require("./assets/fonts/OpenSans/OpenSans-Bold.ttf"),
        BakbakOne: require("./assets/fonts/BakbakOne/BakbakOne-Regular.ttf"),
    });

    if (!loaded) return <AppLoading />;

    return <AppNavigator />;
}
