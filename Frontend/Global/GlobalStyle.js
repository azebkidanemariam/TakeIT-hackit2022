import { StyleSheet } from "react-native";
import { color } from "./theme";

export default StyleSheet.create({
  button: {
    backgroundColor: color.ThirdColor,
  },
  articleList: {
    paddingTop: 10,
    width: "100%",
  },
  articleSingle: {
    backgroundColor: color.backgroudBlue,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: color.SecondaryColor,
  },
  featureImage: {
    flex: 1,
    borderRadius: 5,
    width: "100%",
    resizeMode: "cover",
    height: 300,
    zIndex: 0,
  },
  gradient: {
    flex: 1,
    zIndex: 10,
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 260,
    borderRadius: 5,
  },
  headline: {
    color: color.headlineGreen,
    fontSize: 21,
    fontWeight: "bold",
    paddingHorizontal: 5,
    paddingBottom: 5,
    marginTop: 20,
    marginBottom: 5,
    lineHeight: 30,
    letterSpacing: 0.1,
  },

  imageContainer: {
    marginVertical: 20,
  },
  text: {
    color: "#000",
  },
  title: {
    color: color.red,
    alignSelf: "flex-start",
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 5,
  },

  paragraph: {
    fontSize: 16,
    fontWeight: "normal",
    paddingHorizontal: 20,
    color: color.TextColor,
    lineHeight: 25,
    letterSpacing: 0.1,
    fontFamily: "Arial",
  },

  image: {
    height: 275,
    width: 335,
    borderRadius: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    /* alignSelf: "flex-start", */
  },
});