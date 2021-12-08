import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";

const elections = [
    { title: "¿A donde quieren salir?", totalVotes: 120, currentVotes: 79, key: 1 },
    { title: "¿Quien es el mejor corredor de F1?", totalVotes: 120, currentVotes: 79, key: 2 },
    { title: "¿A donde vamos?", totalVotes: 12123, currentVotes: 723, key: 3 },
    { title: "¿A donde quieren salir?", totalVotes: 120, currentVotes: 79, key: 4 },
    { title: "¿A donde quieren salir?", totalVotes: 120, currentVotes: 79, key: 5 },
    { title: "¿A donde quieren salir?", totalVotes: 120, currentVotes: 79, key: 6 },
    { title: "¿Quien es el mejor corredor de F1?", totalVotes: 120, currentVotes: 79, key: 7 },
];

const MainPage = () => {
    const [currentElections, setCurrentElections] = useState(elections);

    const pressHandler = (key) => {
        setCurrentElections(currentElections.filter((elem) => elem.key != key));
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
                            <View style={styles.itemContainer}>
                                <Text>{`${item.title} Votos: ${item.currentVotes}/${item.totalVotes}`}</Text>
                            </View>
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
        position: "relative",
        top: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 40,
        textAlign: "center",
    },

    itemContainer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 5,
        margin: 10,
        padding: 10,
    },
});
