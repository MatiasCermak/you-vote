import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { FirebaseError } from "@firebase/util";
import { SafeAreaView } from "react-native-safe-area-context";
import { set } from "@firebase/database";

const ProfileScreen = () => {
    const [hasImage, setHasImage] = useState("");
    const [cameraPermission, setCameraPermission] = useState(false);
    useEffect(() => {
        ImagePicker.getCameraPermissionsAsync().then((response) => {
            setCameraPermission(response.granted);
            console.log(response.granted);
        });
        return () => {};
    }, []);

    const handlePress = () => {
        if (!cameraPermission)
            ImagePicker.requestCameraPermissionsAsync().then((response) => {
                response.granted
                    ? setCameraPermission(response.granted)
                    : Alert.alert("Necessary Permissions", "You need to give permission to use this function");
                console.log(response.granted);
            });
        else {
            ImagePicker.launchCameraAsync().then((result) => {
                if (result.cancelled) return;
                const fileName = result.uri.split("/").pop();
                const Path = FileSystem.documentDirectory + fileName;
                try {
                    FileSystem.moveAsync({ from: result.uri, to: Path });
                    console.log(require("../../assets/placeholder/Portrait_Placeholder.png"));
                } catch (error) {
                    console.log(err.message);
                }
                setHasImage(Path);
            });
        }
    };

    return (
        <SafeAreaView>
            <View style={styles.profileImageContainer}>
                <Image
                    style={styles.profileImage}
                    source={
                        hasImage !== ""
                            ? { uri: hasImage }
                            : require("../../assets/placeholder/Portrait_Placeholder.png")
                    }
                />
                <Button title="Change Image" onPress={handlePress} />
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    profileImage: {
        height: 200,
        width: 200,
        borderRadius: 100,
        margin: 10,
    },
    profileImageContainer: { display: "flex", alignItems: "center" },
});
