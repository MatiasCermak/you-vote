import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import OptionList from "../OptionList/OptionList";
import { castVote } from "../../../store/slices/voteSlice";
import { useDispatch } from "react-redux";

const ElectionScreen = ({ route }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const pressHandler = () => {
        if (selectedOption != null) useDispatch(castVote({ election: route.params.key, option: selectedOption }));
    };

    return (
        <View>
            <Text style={styles.titleText}>{route.params.title}</Text>
            <View style={styles.descriptionContainer}>
                <Text>{route.params.description}</Text>
            </View>
            <OptionList options={route.params.options} setSelectedOption={setSelectedOption} />
            <View style={styles.sendVoteButtonContainer}>
                <Button style={styles.sendVoteButton} title="Votar" onPress={pressHandler} />
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
