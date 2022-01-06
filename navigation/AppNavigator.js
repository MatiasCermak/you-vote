import ElectionScreen from "../screens/ElectionScreen/ElectionScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import MainScreen from "../screens/MainScreen/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TitleScreen from "../screens/TitleScreen/TitleScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const ElectionStack = createNativeStackNavigator();
const TitleScreenStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ElectionStackNavigator = () => {
    return (
        <ElectionStack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
            })}
        >
            <ElectionStack.Screen name="Home" component={MainScreen} />
            <ElectionStack.Screen name="Election" component={ElectionScreen} />
        </ElectionStack.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case "Home":
                            iconName = "home";
                            break;
                        case "Profile":
                            iconName = "person";
                            break;
                        case "Add Contact":
                            iconName = "person-add";
                            break;
                        case "New Vote":
                            iconName = "add";
                            break;
                        case "Groups":
                            iconName = "people";
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={ElectionStackNavigator} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="New Vote" component={ProfileScreen} />
            <Tab.Screen name="Add Contact" component={ProfileScreen} />
            <Tab.Screen name="Groups" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TitleScreenStack.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                })}
            >
                <TitleScreenStack.Screen name="Title" component={TitleScreen} />
                <TitleScreenStack.Screen name="Login" component={LoginScreen} />
                <TitleScreenStack.Screen name="Register" component={ProfileScreen} />
                <TitleScreenStack.Screen name="Main" component={MainNavigator} />
            </TitleScreenStack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;
