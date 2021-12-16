import { Button, StyleSheet, Text, View } from "react-native";

import OptionList from "./OptionList/OptionList";
import React from "react";

const ElectionPage = ({ sentElection }) => {
    return (
        <View>
            <Text style={styles.titleText}>{sentElection.title}</Text>
            <View style={styles.descriptionContainer}>
                <Text>{sentElection.description}</Text>
            </View>
            {console.log(sentElection)}
            <OptionList options={sentElection.options} />
            <Button style={styles.sendVoteButton} title="Votar" />
        </View>
    );
};

export default ElectionPage;

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
    sendVoteButton: { width: 50, height: 25, color: "#3772FF" },
});
