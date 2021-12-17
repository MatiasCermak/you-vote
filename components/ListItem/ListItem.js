import { StyleSheet, Text, View } from "react-native";

import React from "react";

const ListItem = ({ children, style }) => {
    return <View style={[styles.optionContainer, style]}>{children}</View>;
};

export default ListItem;

const styles = StyleSheet.create({
    optionContainer: {
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#aaa",
        fontFamily: "OpenSans",
    },
});
