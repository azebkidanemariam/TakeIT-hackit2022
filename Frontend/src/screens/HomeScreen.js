import React from "react";
import CameraScreen from "./CameraScreen";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable, SafeAreaView, Image } from "react-native";
import Style from "../../Global/GlobalStyle";

const HomeScreen = () => {
  const navigation = useNavigation();

  const GoToCamera = () => {
    navigation.navigate("CameraScreen", { CameraScreen });
  };
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.containerTwo}>
        <View style={Style.circle}>
          <Image
            source={require("../../assets/flip_camera_ios.png")}
            style={Style.camera}
          />
        </View>
        <Text style={Style.textCamera}>Koppla din kamera</Text>
        <Text style={Style.paragraph}>
          Just nu har du inga enheter uppkopplad. Klicka på knappen nedanför att
          koppla enheten
        </Text>
        <Pressable onPress={GoToCamera}>
          <View style={Style.buttonShadow}>
            <Text style={Style.buttonText}>Koppla till kamera</Text>
            <Image
              source={require("../../assets/flip_camera_ios.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
