import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../../../components/ListItem/ListItem";
import { useSelector } from "react-redux";

const MainScreen = ({ navigation }) => {
    const currentElections = useSelector((state) => state.votes.elections);

    return (
        <View>
            <Text style={styles.titleText}>Inicio</Text>
            <View>
                <FlatList
                    data={currentElections}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            onPress={() => {
                                navigation.navigate("Election", item);
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

export default MainScreen;

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
