import { Button, Image, StyleSheet, Text, View } from "react-native";

import AppIcon from "../../components/AppIcon/AppIcon";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const TitleScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.titleScreenContainer}>
                <AppIcon />
                <View>
                    <Button title="Logins" onPress={() => navigation.navigate("Login")} />
                    <Button title="Register" onPress={() => navigation.navigate("Register")} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TitleScreen;

const styles = StyleSheet.create({
    titleScreenContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
});
