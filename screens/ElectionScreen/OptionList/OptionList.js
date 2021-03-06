import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";

import ListItem from "../../../components/ListItem/ListItem";

const OptionList = ({ options, selectedOption, setSelectedOption }) => {
    useEffect(() => {});
    return (
        <View>
            <FlatList
                data={options}
                keyExtractor={(option, index) => index}
                renderItem={({ item, index }) => (
                    <TouchableHighlight
                        onPress={() => {
                            setSelectedOption(index);
                        }}
                    >
                        <ListItem
                            style={[
                                styles.optionContainer,
                                index === selectedOption ? styles.selectedOption : styles.unselectedOption,
                            ]}
                        >
                            <Text>{`${item.optionTitle}`}</Text>
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
        padding: 15,
    },
    selectedOption: {
        backgroundColor: "blue",
    },
    unselectedOption: { backgroundColor: "#fff" },
});
