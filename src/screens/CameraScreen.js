import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Pressable } from "react-native";
import Style from "../../Global/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import PictureViewScreen from "./PictureViewScreen";

const CameraScreen = () => {
    const navigation = useNavigation();
    const GoToPictureView = () => {
        navigation.navigate("PictureViewScreen", { PictureViewScreen });
    };
    return (
        
        <SafeAreaView style={Style.container}>
        {/* <SafeAreaView > */}
            <Pressable onPress={GoToPictureView}>
                <View>
                <Text>Camera Screen</Text>
                </View>
            </Pressable>
        </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#804D93",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

export default CameraScreen;
