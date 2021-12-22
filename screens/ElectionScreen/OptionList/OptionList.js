import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";

import ListItem from "../../../components/ListItem/ListItem";
import React from "react";

const OptionList = ({ options, setSelectedOption }) => {
    return (
        <View>
            <FlatList
                data={options}
                keyExtractor={(option, index) => index}
                renderItem={(option, index) => (
                    <TouchableHighlight onPress={setSelectedOption(index)}>
                        <ListItem style={styles.optionContainer}>
                            <Text>{`${option.item.optionTitle}`}</Text>
                        </ListItem>
                    </TouchableHighlight>
                )}
            />
        </View>
    );
};

export default OptionList;

const styles = StyleSheet.create({
    optionContainer: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 15,
    },
});
