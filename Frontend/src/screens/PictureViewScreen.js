import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Pressable } from "react-native";
import Style from "../../Global/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import SendPictureScreen from "./SendPictureScreen";
const PictureViewScreen = () => {
  const navigation = useNavigation();
  const GoToSendPicture = () => {
    navigation.navigate("SendPictureScreen", { SendPictureScreen });
  };
  return (
    <SafeAreaView style={Style.container}>
      <Pressable onPress={GoToSendPicture}>
        <View>
          <Text>Picture View Screen</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#804D93",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PictureViewScreen;
