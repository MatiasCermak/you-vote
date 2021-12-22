import ElectionScreen from "../screens/ElectionScreen/ElectionScreen/ElectionScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainScreen from "../screens/MainScreen/MainScreen/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen/ProfileScreen";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ElectionStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ElectionStackNavigator = () => {
    return (
        <ElectionStack.Navigator>
            <ElectionStack.Screen name="Home" component={MainScreen} />
            <ElectionStack.Screen name="Election" component={ElectionScreen} />
        </ElectionStack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = "home";
                        } else if (route.name === "Profile") {
                            iconName = "person";
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "blue",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen options={{ headerShown: false }} name="Home" component={ElectionStackNavigator} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
