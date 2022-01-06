import { Image, StyleSheet, View } from "react-native";

import React from "react";

const AppIcon = () => {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../../assets/logos/Logo.png")} />
        </View>
    );
};

export default AppIcon;

const styles = StyleSheet.create({
    logo: {
        width: 193,
        height: 136,
    },
    logoContainer: {
        display: "flex",
        marginTop: 50,
        alignItems: "center",
    },
});
