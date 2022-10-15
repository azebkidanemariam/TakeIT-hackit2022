import React from "react";
import CameraScreen from "./CameraScreen";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable, SafeAreaView } from "react-native";
import Style from "../../Global/GlobalStyle";
const HomeScreen = () => {
  const navigation = useNavigation();

  const GoToCamera = () => {
    navigation.navigate("CameraScreen", { CameraScreen });
  };
  return (
    <SafeAreaView style={Style.container}>
      <Pressable onPress={GoToCamera}>
        <Text>Koppla till Camera</Text>
      </Pressable>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
