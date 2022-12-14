import React from "react";
import CameraScreen from "./CameraScreen";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable, StyleSheet, SafeAreaView } from "react-native";
import Style from "../../Global/GlobalStyle";
const HomeScreen = () => {
  const navigation = useNavigation();

  const GoToCamera = () => {
    navigation.navigate("CameraScreen", { CameraScreen });
  };
  const Cameraimg = ()=> <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 42q-1.2 0-2.1-.9Q4 40.2 4 39V13.35q0-1.15.9-2.075.9-.925 2.1-.925h7.35L18 6h12v4.65q2.25 0 3.8 1.55 1.55 1.55 1.55 3.8H44v23q0 1.2-.925 2.1-.925.9-2.075.9Zm17-7.3q3.6 0 6.05-2.45 2.45-2.45 2.45-6.05 0-3.65-2.45-6.075Q27.6 17.7 24 17.7q-3.65 0-6.075 2.425Q15.5 22.55 15.5 26.2q0 3.6 2.425 6.05Q20.35 34.7 24 34.7Zm0-3q-2.4 0-3.95-1.575Q18.5 28.55 18.5 26.2q0-2.4 1.55-3.95Q21.6 20.7 24 20.7q2.35 0 3.925 1.55Q29.5 23.8 29.5 26.2q0 2.35-1.575 3.925Q26.35 31.7 24 31.7ZM41.7 14q0-4.05-2.825-6.875T32 4.3V2q5 0 8.5 3.5T44 14Zm-4.35 0q0-2.25-1.55-3.8-1.55-1.55-3.8-1.55v-2.3q3.15 0 5.4 2.25 2.25 2.25 2.25 5.4Z"/></svg>
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.circle}>
            {/* <img src={cameraimg}></img> */}
            <Cameraimg/>
            hdh
        </View>
        <View style={styles.div}>
            <Text style={styles.textSm}>HomeScreen</Text>
            <Text style={styles.text}>Koppla till TakeIt</Text>
            <Text style={styles.textSm}>Klicka på knappen för att starta igång kommunikationen med TakeIt smarta photobås!</Text>
        </View>
        <Pressable onPress={GoToCamera}>
        <View style={styles.button}>
            <Text style={styles.textButton}>Koppla :D</Text>
        </View>
        </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#804D93",
        alignItems: "center",
        justifyContent: "center",
    },
    div: {
        marginLeft: "auto"
    },
    circle: {
        margin: "auto",
        borderRadius: "10px",
        backgroundColor: "pink",
    },
    button: {
        width: "300px",
        height: "60px",
        backgroundColor: "pink",
        marginLeft: "auto",
        marginTop: "20px",
        boxShadow: "auto",
    },
    text: {
        fontSize: "14px",
        fontWeight: "bold",
        textAlign: "center"
    },
    textSm: {
        textAlign: "center"
    },
    textButton: {
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: "18px",
        margin: "auto"
    }
});

export default HomeScreen;
