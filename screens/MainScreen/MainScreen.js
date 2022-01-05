import { Button, FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useEffect } from "react";
import { child, get, getDatabase, query, ref } from "firebase/database";

import ListItem from "../../components/ListItem/ListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { setElections } from "../../store/slices/voteSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `/`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    dispatch(setElections({ elections: snapshot.val() }));
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
        return () => {};
    }, [currentElections]);
    const currentElections = useSelector((state) => state.votes.elections);
    return (
        <SafeAreaView>
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
        </SafeAreaView>
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
