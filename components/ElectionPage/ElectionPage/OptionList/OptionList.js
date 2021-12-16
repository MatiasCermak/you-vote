import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";

import React from "react";

const OptionList = ({ options }) => {
    return (
        <View>
            <FlatList
                data={options}
                keyExtractor={(option) => option.optionTitle}
                renderItem={(option) => (
                    <TouchableHighlight onPress={() => {}}>
                        <View style={styles.optionContainer}>
                            <Text>{`${option.item.optionTitle}`}</Text>
                        </View>
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
        borderTopWidth: 1,
        borderColor: "#aaa",
        padding: 15,
        fontFamily: "OpenSans",
    },
});
