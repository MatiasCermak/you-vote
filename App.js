import AppLoading from "expo-app-loading";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./store";
import { useFonts } from "expo-font";

require("./firebase/init");
export default function App() {
    const [loaded] = useFonts({
        OpenSans: require("./assets/fonts/OpenSans/OpenSans-Regular.ttf"),
        OpenSansBold: require("./assets/fonts/OpenSans/OpenSans-Bold.ttf"),
        BakbakOne: require("./assets/fonts/BakbakOne/BakbakOne-Regular.ttf"),
    });

    if (!loaded) return <AppLoading />;

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <AppNavigator />
            </SafeAreaProvider>
        </Provider>
    );
}
