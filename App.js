import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import AppLoading from "expo-app-loading";
import ElectionPage from "./components/ElectionPage/ElectionPage/ElectionPage";
import MainPage from "./components/MainPage/MainPage/MainPage";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function App() {
    const [sentElection, setSentElection] = useState(null);
    const [loaded] = useFonts({
        OpenSans: require("./assets/fonts/OpenSans/OpenSans-Regular.ttf"),
        OpenSansBold: require("./assets/fonts/OpenSans/OpenSans-Bold.ttf"),
        BakbakOne: require("./assets/fonts/BakbakOne/BakbakOne-Regular.ttf"),
    });

    if (!loaded) return <AppLoading />;

    let content = <MainPage setSentElection={setSentElection} />;

    if (sentElection != null) {
        content = <ElectionPage sentElection={sentElection} />;
    }

    return <SafeAreaView>{content}</SafeAreaView>;
}
