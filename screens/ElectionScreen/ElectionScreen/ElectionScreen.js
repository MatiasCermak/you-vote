import { Button, StyleSheet, Text, View } from "react-native";

import OptionList from "../OptionList/OptionList";
import React from "react";

const ElectionScreen = ({ route }) => {
    return (
        <View>
            <Text style={styles.titleText}>{route.params.title}</Text>
            <View style={styles.descriptionContainer}>
                <Text>{route.params.description}</Text>
            </View>
            <OptionList options={route.params.options} />
            <View style={styles.sendVoteButtonContainer}>
                <Button style={styles.sendVoteButton} title="Votar" />
            </View>
        </View>
    );
};

export default ElectionScreen;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 20,
        fontFamily: "BakbakOne",
    },
    descriptionContainer: {
        minHeight: 150,
        fontFamily: "OpenSans",
    },
    sendVoteButtonContainer: {
        color: "#3772FF",
        width: "100%",
        display: "flex",
        marginTop: 20,
        alignItems: "center",
        padding: 5,
    },
    sendVoteButton: { padding: 5 },
});
