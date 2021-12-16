import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../../SharedComponents/ListItem/ListItem";

const elections = [
    {
        title: "¿A donde quieren salir?",
        description: "Placeholder",
        totalVotes: 120,
        currentVotes: 79,
        key: 1,
        options: [
            { optionTitle: "Parque", curentVotes: 200 },
            { optionTitle: "Campo", curentVotes: 123 },
            { optionTitle: "Playa", curentVotes: 150 },
            { optionTitle: "Montaña", curentVotes: 250 },
        ],
    },
    {
        title: "¿Quien es el mejor corredor de F1?",
        description: "Placeholder",
        totalVotes: 120,
        currentVotes: 79,
        key: 2,
        options: [
            { optionTitle: "Max Verstappen", curentVotes: 10 },
            { optionTitle: "Michael Schumacher", curentVotes: 50 },
            { optionTitle: "Kimi Raikonnen", curentVotes: 5 },
            { optionTitle: "Ayrton Senna", curentVotes: 14 },
        ],
    },
    {
        title: "¿A donde vamos?",
        description: "Placeholder",
        totalVotes: 12123,
        currentVotes: 723,
        key: 3,
        options: [
            { optionTitle: "Parque", curentVotes: 200 },
            { optionTitle: "Campo", curentVotes: 123 },
            { optionTitle: "Playa", curentVotes: 150 },
            { optionTitle: "Montaña", curentVotes: 250 },
        ],
    },
    {
        title: "¿A donde quieren salir?",
        description: "Placeholder",
        totalVotes: 120,
        currentVotes: 79,
        key: 4,
        options: [
            { optionTitle: "Parque", curentVotes: 200 },
            { optionTitle: "Campo", curentVotes: 123 },
            { optionTitle: "Playa", curentVotes: 150 },
            { optionTitle: "Montaña", curentVotes: 250 },
        ],
    },
    {
        title: "¿A donde quieren salir?",
        description: "Placeholder",
        totalVotes: 120,
        currentVotes: 79,
        key: 5,
        options: [
            { optionTitle: "Club", curentVotes: 10 },
            { optionTitle: "Restaurant", curentVotes: 50 },
            { optionTitle: "Bowling", curentVotes: 5 },
            { optionTitle: "Fiesta", curentVotes: 14 },
        ],
    },
    {
        title: "¿A donde quieren salir?",
        description: "Placeholder",
        totalVotes: 120,
        currentVotes: 79,
        key: 6,
        options: [
            { optionTitle: "Club", curentVotes: 10 },
            { optionTitle: "Restaurant", curentVotes: 50 },
            { optionTitle: "Bowling", curentVotes: 5 },
            { optionTitle: "Fiesta", curentVotes: 14 },
        ],
    },
    {
        title: "¿Quien es el mejor corredor de F1?",
        description: "Placeholder",
        totalVotes: 120,
        currentVotes: 79,
        key: 7,
        options: [
            { optionTitle: "Max Verstappen", curentVotes: 10 },
            { optionTitle: "Michael Schumacher", curentVotes: 50 },
            { optionTitle: "Kimi Raikonnen", curentVotes: 5 },
            { optionTitle: "Ayrton Senna", curentVotes: 14 },
        ],
    },
];

const MainPage = ({ setSentElection }) => {
    const [currentElections, setCurrentElections] = useState(elections);

    const pressHandler = (key) => {
        setSentElection(currentElections.find((elem) => elem.key === key));
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleText}>Inicio</Text>
            <View>
                <FlatList
                    data={currentElections}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            onPress={() => {
                                pressHandler(item.key);
                            }}
                        >
                            <ListItem style={styles.itemContainer}>
                                <View>
                                    <Text>{`${item.title}`}</Text>
                                </View>
                                <View>
                                    <Text>{`Votos: ${item.currentVotes}`}</Text>
                                </View>
                            </ListItem>
                        </TouchableHighlight>
                    )}
                />
            </View>
        </View>
    );
};

export default MainPage;

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 20,
        fontFamily: "BakbakOne",
    },

    itemContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fff",
        padding: 15,
    },
});
