import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Playercard from "../components/Playercard";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationProps } from "../App";
import colors from "../config/colors";
import Page from "../components/Page";

export default function Home({ navigation }: NavigationProps) {
  return (
    <Page>
      <View style={styles.gridRow}>
        <Playercard />
      </View>
      <View style={styles.gridRow}>
        <TouchableHighlight
          style={[styles.gridCellPlay, styles.button]}
          onPress={() => navigation.navigate("Play")}>
          <Text style={styles.text}>Play</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.gridRow}>
        <TouchableHighlight style={[styles.gridCellCategories, styles.button]}>
          <Text style={styles.text}>Categories</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.gridRow}>
        <TouchableHighlight style={[styles.gridCellFriends, styles.button]}>
          <FontAwesome5 name={"user-friends"} style={styles.text} />
        </TouchableHighlight>
        <TouchableHighlight style={[styles.gridCellSettings, styles.button]}>
          <FontAwesome5 name={"sliders-h"} style={styles.text} />
        </TouchableHighlight>
        <TouchableHighlight style={[styles.gridCellHelp, styles.button]}>
          <FontAwesome5 name={"question-circle"} style={styles.text} />
        </TouchableHighlight>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  button: {
    overflow: "hidden",
    height: 144,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 28,
    letterSpacing: 1.5,
    color: colors.white,
    fontWeight: "900",
  },
  gridRow: {
    flexDirection: "row",
  },
  gridCellPlay: {
    flex: 1,
    marginVertical: 4,
    backgroundColor: colors.primaryColor,
  },
  gridCellCategories: {
    flex: 1,
    marginVertical: 4,
    backgroundColor: colors.cardColor,
  },
  gridCellSettings: {
    flex: 1,
    margin: 4,
    backgroundColor: colors.cardColor,
  },
  gridCellFriends: {
    flex: 1,
    marginVertical: 4,
    marginRight: 4,
    backgroundColor: colors.cardColor,
  },
  gridCellHelp: {
    flex: 1,
    marginVertical: 4,
    marginLeft: 4,
    backgroundColor: colors.cardColor,
  },
});
