import ElectionScreen from "../screens/ElectionScreen/ElectionScreen/ElectionScreen";
import MainScreen from "../screens/MainScreen/MainScreen/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Election" component={ElectionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
