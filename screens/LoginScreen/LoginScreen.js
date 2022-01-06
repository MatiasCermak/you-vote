import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setEmail, setPassword } from "../../store/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";

import AppIcon from "../../components/AppIcon/AppIcon";
import React from "react";

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const password = useSelector((state) => state.app.password);
    const email = useSelector((state) => state.app.email);

    const handlePress = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setPassword({ password: "" });
                navigation.navigate("Main");
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    };

    return (
        <View>
            <AppIcon />
            <View style={styles.inputContainer}>
                <Text>E-Mail</Text>
                <TextInput
                    onChangeText={(text) => {
                        dispatch(setEmail({ email: text }));
                    }}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Pasword</Text>
                <TextInput onChangeText={(text) => dispatch(setPassword({ password: text }))} style={styles.input} />
            </View>
            <Button title="Login" onPress={handlePress} />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    inputContainer: { marginVertical: 10 },
});
