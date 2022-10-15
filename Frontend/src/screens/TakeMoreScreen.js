import React from "react";
import { Text, View, SafeAreaView, Pressable } from "react-native";
import Style from "../../Global/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";

const TakeMoreScreen = () => {
  const navigation = useNavigation();
  const GoToHome = () => {
    navigation.navigate("HomeScreen", { HomeScreen });
  };
  return (
    <SafeAreaView style={Style.container}>
      <Pressable onPress={GoToHome}>
        <View>
          <Text>takemorePictureScreen</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default TakeMoreScreen;
